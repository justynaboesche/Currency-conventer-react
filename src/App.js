import { Form } from "./Form";
import {Footer} from "./Footer";
import {Container} from "./Container";

function App() {
  return (
    <Container>
      <Form />
      <Footer description="Kursy walut według średniego kursu NBP z dn. 28.10.2022" />
    </Container>
  );
}

export default App;
