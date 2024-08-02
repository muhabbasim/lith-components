import React, { useEffect } from 'react'
import { Languages } from '../../utils/LanguageData.ts';
import { useDispatch, useSelector } from '../../store/Store.tsx';
import { setDir, setLanguage } from '../../store/customizer/CustomizerSlice.tsx';
import {  Navbar, NavDropdown, Nav } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

export default function Language() {
  
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const customizer = useSelector((state) => state.customizer);
  const currentLang = Languages.find((lang) => lang.value === customizer.isLanguage) || Languages[0];
  
  const handleChageLanguage = async ( value ) => {
    localStorage.setItem('language', JSON.stringify(value))

    dispatch(setLanguage(value))  
    if ( value === 'ar' ) {
      dispatch(setDir('rtl'))
    } else if ( value === 'en' ) {
      dispatch(setDir('ltr'))
    }
  
    window.location.reload();
  }

  useEffect(() => {
    i18n.changeLanguage(customizer.isLanguage);
  }, [currentLang]);

  return (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className=" me-auto">
        <NavDropdown color='black' title={
            <span className='text-black'>{currentLang.value === 'en' ? "En" : (currentLang.value === 'ar' && "Ar")}</span>
          } 
          id="basic-nav-dropdown">
          {Languages.map((lang) => (
            <NavDropdown.Item key={lang.value} onClick={() => handleChageLanguage(lang.value)}>{lang.flagname}</NavDropdown.Item>
          ))}
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  )
}
