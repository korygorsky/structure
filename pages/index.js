import Diagram from "../components/diagram";
import DebugPanel from "../components/debug-panel";
import KeyboardLegend from "../components/keyboard-legend/index";
import StoreProvider from "../data/store";
import useHotKeys from "../hooks/useHotKeys";

const Page = () => {
  useHotKeys();
  return (
    <div>
      <DebugPanel />
      <Diagram />
      <KeyboardLegend />
    </div>
  );
};

export default function IndexPage() {
  return (
    <StoreProvider>
      <Page />
    </StoreProvider>
  );
}
