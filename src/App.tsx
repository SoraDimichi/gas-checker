import { useState } from "preact/hooks";
import {
  Container,
  Typography,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  CircularProgress,
  Alert,
} from "@mui/material";
import { InfuraProvider, parseUnits, formatUnits } from "ethers";

const id = import.meta.env.VITE_ID;

if (!id) {
  throw new Error("Infura Project ID is required");
}

const provider = new InfuraProvider("mainnet", id);

const fetchGasPrices = () =>
  provider.getFeeData().then(({ gasPrice }) => {
    if (!gasPrice) throw Error("Gas price not available");

    return {
      low: formatUnits((gasPrice * 8n) / 10n, "gwei"),
      medium: formatUnits(gasPrice, "gwei"),
      high: formatUnits((gasPrice * 12n) / 10n, "gwei"),
    };
  });

const calculateCost = (gasPriceGwei: string, gasLimit = 21000) => {
  const gasPrice = parseUnits(gasPriceGwei, "gwei");
  return formatUnits(gasPrice * BigInt(gasLimit));
};

const App = () => {
  const [gasPrices, setGasPrices] = useState<Record<string, string> | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchGasPrices = async () => {
    setLoading(true);
    setError(null);
    try {
      const prices = await fetchGasPrices();
      setGasPrices(prices);
    } catch (err) {
      setError("Failed to fetch gas prices.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "40px" }}>
      <Typography variant="h4" gutterBottom align="center">
        Ethereum Gas Tracker
      </Typography>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleFetchGasPrices}
        disabled={provider.ready || loading}
      >
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Fetch Gas Prices"
        )}
      </Button>
      {error && (
        <Alert severity="error" style={{ marginTop: "20px" }}>
          {error}
        </Alert>
      )}
      {gasPrices && (
        <Paper style={{ marginTop: "30px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Gas Tier</TableCell>
                <TableCell>Gas Price (Gwei)</TableCell>
                <TableCell>Transaction Cost (ETH)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {["low", "medium", "high"].map((tier) => (
                <TableRow key={tier}>
                  <TableCell>
                    {tier.charAt(0).toUpperCase() + tier.slice(1)}
                  </TableCell>
                  <TableCell>{gasPrices[tier]}</TableCell>
                  <TableCell>{calculateCost(gasPrices[tier])}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </Container>
  );
};

export default App;
