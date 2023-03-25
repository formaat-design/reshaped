import Demo, { demoLinks } from "../components/Demo";

export function links() {
  return [...demoLinks()];
}

export default function Index() {
  return <Demo />;
}
