import { EventProvider } from "react-native-outside-press";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <EventProvider>
      <Navigation></Navigation>
    </EventProvider>
  );
}
