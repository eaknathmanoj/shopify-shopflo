import { Heading, Page } from "@shopify/polaris";

import {
  extend,
  render,
  useExtensionInput,
  BlockStack,
  Button,
  Image,
} from "@shopify/post-purchase-ui-extensions-react";
extend("Checkout::PostPurchase::ShouldRender", async () => {
  return { render: true };
});
render("Checkout::PostPurchase::Render", () => <App />);

export function App() {
  const { done } = useExtensionInput();
  return (
    <BlockStack spacing="loose" alignment="center">
      <Heading>My first post-purchase extension</Heading>
      <Button submit onPress={done}>
        Click me
      </Button>
    </BlockStack>
  );
}

const Index = () => (
  <Page>
    <Heading>Shopify app with Node and React🎉</Heading>
    <div>
      <form>
        <label for="fname">Referral code:</label>
        <input type="text" id="fname" name="fname" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </Page>
);

export default Index;
