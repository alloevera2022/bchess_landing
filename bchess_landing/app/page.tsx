import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Main_info from "./components/main_info/Main_info";
import Security from "./components/security/Security";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Main></Main>
      <Main_info></Main_info>
      <Security></Security>
    </main>
  );
}
