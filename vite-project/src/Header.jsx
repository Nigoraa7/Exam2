import React from 'react'
import pic1 from '/logo.png'
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <header className='flex aitems-center h-15 justify-between p-[20px] font-serif font-thin'>
     <nav className='flex items-center'>
        <img className='' src={pic1} alt="" />
        <h1 className='text-xl ml-[10px]'>СтройКонтроль</h1>
        </nav> 
        <nav className='flex justify-between items-center w-[70%]'>
            <p className='text-[#036FC7]'>Главная</p>
            <p>О нас</p>
            <p>Продукция</p>
            <p>Процесс</p>
            <p>Надёжность</p>
            <p>Клиенты</p>
            <p>Связаться с нами</p>
            <Button sx={{backgroundColor:'#212B31'}} variant="contained">Contained</Button>
        </nav>
    </header>
  )
}

export default Header
