import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useActions } from "../../hooks/actions";
import { useTypedSelector } from "../../hooks/selector";

export const Header = () => {
  const { categoriesData, currentCategory } = useTypedSelector(
    (state) => state.categories
  );
  const { fetchCategories, fetchCats, setCurrentCategory } = useActions();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleFetchCats = (category: number) => {
    if (category === currentCategory) return;
    setAnchorElNav(null);
    fetchCats(1, 10, category);
    setCurrentCategory(category);
  };

  useEffect(() => {
    if (!Object.keys(categoriesData).length) fetchCategories();
  }, [fetchCategories, categoriesData]);

  return (
    <header>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {categoriesData.map((category) => (
                  <MenuItem
                    key={category.id}
                    onClick={() => handleFetchCats(category.id)}
                  >
                    <Typography textAlign="center">{category.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {categoriesData.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => handleFetchCats(category.id)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {category.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};
