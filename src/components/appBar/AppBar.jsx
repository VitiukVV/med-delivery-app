import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, MainLinks, StyledLink } from "./AppBarStyled";

const AppBar = () => {
    return (
        <>
            <Header>
                <nav>
                    <MainLinks>
                        <StyledLink to="/">Shop</StyledLink>
                        <StyledLink to="/shopping-cart">
                            Shopping Cart
                        </StyledLink>
                    </MainLinks>
                </nav>
            </Header>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
};

export default AppBar;
