import Header from "@/components/landing-page/header";
import Featured from "@/components/landing-page/featured";
import Footer from "@/components/landing-page/footer";
const LoginPageLayout = ({ children }: { children: React.ReactNode }) => {

    return (
      <main>
        <Header />
        
        {children}
        
      </main>
    );
  };
  
  export default LoginPageLayout