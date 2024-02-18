
import PropTypes from 'prop-types';


# typ any
export function Name({ name }) {
  return <span>{name}</span>;
}

Name.propTypes = {
    name: PropTypes.string
};

# Określa że prop 'name' powinien być stringiem

# Jaki typ będzie miał stan firstName w poniższej instrukcji useState?
const [firstName, setFirstName] = useState("");
# to będzie wnioskowany string


# nie będzię błędu, gdyż firstName jest opcjonalny
type Props = {
  firstName?: string;
  email: string;
};
export function ContactDetails({ firstName, email }: Props) {
  ...
}

<ContactDetails email="fred@somewhere.com" />

# ma być to fruits: string[]
<FruitList fruits={["Banana", "Apple", "Strawberry"]} />;

export function TextVanish({ text }: Props) {
  const [textToRender, setTextToRender] = useState(text);
  useEffect(() => {
    setTimeout(() => setTextToRender(""), 5000);
  }, []);
  if (!text) {
    return null;
  }
  return <span>{textToRender}</span>;
}