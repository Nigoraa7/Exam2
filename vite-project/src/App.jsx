import React, { useState } from 'react'
import Header from './Header'
import Button from '@mui/material/Button';
import pic2 from '/Rectangle.png'
import pic3 from '/Rectangle-2.png'
import pic4 from '/Frame-15.png'
import pic5 from '/Frame-16.png'
import pic6 from '/Frame-17.png'
import pic7 from '/Rectangle-3.png'
import pic8  from '/Rectangle-4.png'
import pic9 from '/Rectangle-5.png'
import pic10 from '/Rectangle-6.png'
import pic11 from '/Rectangle-7.png'
import pic12 from '/Rectangle-8.png'
import pic13 from '/Rectangle-9.png'
import pic14 from '/Rectangle-10.png'
import pic15 from '/Rectangle-11.png'
import pic16 from '/Rectangle-12.png'
import MyCard from '../Cards';
import logo1 from '/Scaffolding.png'
import logo2 from '/Scaffolding.png'
import logo3 from '/Scaffolding.png'
import logo4 from '/Scaffolding.png'
import logo5 from '/Scaffolding.png'
import logo6 from '/Scaffolding.png'
import logo7 from '/Scaffolding.png'
import logo8 from '/Scaffolding.png'
import logo9 from '/Scaffolding.png'
import Box from '@mui/material/Box'



const App = () => {
  const [data,setData] = useState(
    [
      {id:1,image:'./Frame-20.png', name:'Сниженное загрязнение',desc:'При оптимизации логистики требуется меньше поездок, что приводит к снижению выбросов CO2. Выбрасываемый CO2 контролируется, что позволяет ставить цели и вносить ощутимые улучшения.'},
      {id:2, image:'./Frame-20.png', name:'Сниженное загрязнение',desc:'При оптимизации логистики требуется меньше поездок, что приводит к снижению выбросов CO2. Выбрасываемый CO2 контролируется, что позволяет ставить цели и вносить ощутимые улучшения.'},
      {id:3, image:'./Frame-20.png', name:'Сниженное загрязнение',desc:'При оптимизации логистики требуется меньше поездок, что приводит к снижению выбросов CO2. Выбрасываемый CO2 контролируется, что позволяет ставить цели и вносить ощутимые улучшения.'},
    ]
  )

  const [addModal,setAddModal] = useState(false)
  const [addName, setAddName] = useState('')
  const [addImage,setAddImage] = useState('')
  const [addDesc,setAddDesc] = useState('')

  const addCard = () => {

    const newCard = {
      id: data.length + 1,
      image: addImage,
      name: addName,
      desc: addDesc,
    };
    setData([...data, newCard]);
  

    setAddName('');
    setAddImage('');
    setAddDesc('');
  

    setAddModal(false);
  };
  

  const deleteCard = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
   


  const [editModal, setEditModal] = useState(false);
  const [currentEditId, setCurrentEditId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editImage, setEditImage] = useState('');
  const [editDesc, setEditDesc] = useState('');

  const openEditModal = (id) => {
    const card = data.find((item) => item.id === id);
    if (card) {
      setEditName(card.name);
      setEditImage(card.image);
      setEditDesc(card.desc);
      setCurrentEditId(id);
      setEditModal(true);
    }
  };

  const editCard = () => {
    setData(data.map((item) =>
      item.id === currentEditId
        ? { ...item, name: editName, image: editImage, desc: editDesc }
        : item
    ));

    setEditName('');
    setEditImage('');
    setEditDesc('');
    setEditModal(false);
  };

  const [searchQuery, setSearchQuery] = useState('');
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const SearchChange = (event) => {
    setSearchQuery(event.target.value);
  };  


  return (
    <>
      <Header/>
      <section className='mt-[30px]'>
        <div className='text-center'>
          <h1 className='text-3xl font-serif font-thin'>Умная доставка материалов для <br /> сложных строительных площадок</h1>
          <Button sx={{backgroundColor:'#212B31', fontSize:'12px', marginTop:'30px', marginRight:'10px'}} variant="contained">Заказать демо</Button>
          <Button sx={{backgroundColor:'transparent', color:'black', fontSize:'12px',marginTop:'30px', marginLeft:'10px'}} variant="contained">Подробнее</Button>
        </div>
        <main className='text-center'>
          <img className='m-auto w-[80%] mt-[30px]' src={pic2} alt="" />
          <img className='m-auto w-[60%] mt-[15px]' src={pic3} alt="" />
        </main>
      </section>
      <section className='flex justify-between p-[30px] text-center font-serif text-[15px] mt-[40px]'>
<div>
  <img className='m-auto' src={pic4} alt="" />
  <p className='mt-[15px] font-bold'>Повышение эффективности</p>
  <p>Эффективные проекты стоят дешевле и завершаются в срок.</p>
</div>
<div>
  <img className='m-auto'  src={pic5} alt="" />
  <p className='mt-[15px] font-bold'>Снижение потерь</p>
  <p>Тщательно отслеживайте движение стройматериалов, чтобы избежать краж и повреждений.</p>
</div>
<div>
  <img className='m-auto'  src={pic6} alt="" />
  <p className='mt-[15px] font-bold'>Повышение безопасности</p>
  <p>Обеспечьте здоровье и благополучие людей, работающих на вашей площадке.</p>
</div>
      </section>
      <section className='text-center p-[30px]'>
        <h1 className='font-serif font-bold text-[25px]'>Строительство - это хаос</h1>
        <p className='font-serif mt-[20px] '>Хаос может быть удивительной творческой силой, воздвигающая новые здания из пыли. <br />
Хаос вызывает несчастные случаи, задержки и потери. Он вводит проекты в стресс и разочарование. <br />
Это означает, что вы действительно не контролируете ситуацию.</p>
<img className='mt-[30px]' src={pic7} alt="" />
<p className='font-serif font-medium text-[22px] mt-[60px]'>Пора навести порядок на вашей стройплощадке <br /> и взять под контроль свой проект</p>
      </section>
      <section className='p-[50px] flex justify-between items-center'>
        <div>
          <h1 className='font-medium font-serif text-[20px]'>Мы заботимся о доставке на <br /> стройплощадку и о людях, <br /> которые на них рассчитывают</h1>
          <p className='text-[#72787D] font-serif mt-[20px]'>Мы знаем всё о гордости от сияющего нового здания. <br /> Нам также известно всё о разочаровании от попыток <br /> завершить проект в срок и в рамках бюджета.</p>
          <p className='font-serif bg-[yellow] w-[fit-content] text-xs mt-[20px]'>Мы здесь, чтобы помочь.</p>
        </div>
        <div>
          <img src={pic8} alt="" />
        </div>
      </section>
      <section>
        <div className='flex justify-between p-[40px] flex-wrap'>
          <img className='w-[150px]' src={pic9} alt="" />
          <img className='w-[150px]' src={pic10} alt="" />
          <img className='w-[150px]' src={pic11} alt="" />
          <img className='w-[150px]' src={pic12} alt="" />
          <img className='w-[150px]' src={pic13} alt="" />
        </div>
      </section>
      <section className='text-center p-[40px]'>
        <h1 className='font-medium font-serif text-[20px]'>Что такое СтройКонтроль?</h1>
        <p className='text-[#72787D] font-serif mt-[20px]'>СтройКонтроль - это интеллектуальная система управления доставкой, <br /> предоставляющая информацию и контроль материалов на сложных строительных <br /> площадках в режиме реального времени.</p>
      </section>
      <section className='p-[40px] flex justify-between items-center'>
        <div className=''>
        <h1 className='text-[17px] font-serif'>Отслеживайте доставку по всей цепочке поставок</h1>
        <p className='text-[#72787D] font-serif mt-[20px]'>От поставщика до субподрядчика - вы всегда знаете, где <br /> находятся ваши материалы, благодаря чему обычные отходы <br /> уходят в прошлое и сокращаются несчастные случаи на месте.</p>
        </div>
        <div>
          <img src={pic14} alt="" />
        </div>
      </section>
      <section className='p-[40px] flex justify-between items-center'>
        <div>
          <img src={pic15} alt="" />
        </div>
        <div className=''>
        <h1 className='text-[17px] font-serif'>Оптимизируйте и контролируйте свое прибытие на место</h1>
        <p className='text-[#72787D] font-serif mt-[20px]'>Транспортные средства доставки прибывают в  <br />фиксированные промежутки времени в заранее назначенные <br /> отсеки, где разгрузочное оборудование готово и ждет их.</p>
        </div>
      </section>

      <section className='p-[40px] flex justify-between items-center'>
        <div className=''>
        <h1 className='text-[17px] font-serif'>Возьмите под контроль данные в режиме реального времени</h1>
        <p className='text-[#72787D] font-serif mt-[20px]'>Интеллектуальная отчетность дает вам возможность <br /> принимать решения в зависимости от того, как обстоят дела в <br /> данный момент. Больше никаких ручных отчетов по заливке <br /> бетона или ежемесячной проверки 10.000 накладных со <br /> счетами, все это доступно онлайн без каких-либо усилий.</p>
        </div>
        <div>
          <img src={pic16} alt="" />
        </div>
      </section>
      <section className='p-[40px]'>
        <h1 className='text-[25px] font-serif text-center ' >Доставка стала проще</h1>
        <p className=' font-serif text-center text-[#72787D]'>Мы позаботимся обо всех ваших различных поставках и их многочисленных специализированных требованиях к разгрузке.</p>
      </section>
   
      <section className='p-[30px] flex flex-wrap justify-between content-between h-[550px]'>
        <div className='w-[300px] flex'>
          <img className='w-[50px] h-[50px]' src={logo1} alt="" />
          <div>
            <p>Сборные панели</p>
            <p>Сборные панели прибывают по <br /> очереди, их хранение на месте <br /> отслеживается, а их установка <br /> планируется и контролируется.</p>

          </div>
        </div>
        <div className='w-[300px] flex'>
          <img className='w-[50px] h-[50px]' src={logo2} alt="" />
          <div>
            <p>Сборные панели</p>
            <p>Сборные панели прибывают по <br /> очереди, их хранение на месте <br /> отслеживается, а их установка <br /> планируется и контролируется.</p>

          </div>
        </div>
        <div className='w-[300px] flex'>
          <img className='w-[50px] h-[50px]' src={logo3} alt="" />
          <div>
            <p>Сборные панели</p>
            <p>Сборные панели прибывают по <br /> очереди, их хранение на месте <br /> отслеживается, а их установка <br /> планируется и контролируется.</p>

          </div>
        </div>
        <div className='w-[300px] flex'>
          <img className='w-[50px] h-[50px]' src={logo4} alt="" />
          <div>
            <p>Сборные панели</p>
            <p>Сборные панели прибывают по <br /> очереди, их хранение на месте <br /> отслеживается, а их установка <br /> планируется и контролируется.</p>

          </div>
        </div>
        <div className='w-[300px] flex'>
          <img className='w-[50px] h-[50px]' src={logo5} alt="" />
          <div>
            <p>Сборные панели</p>
            <p>Сборные панели прибывают по <br /> очереди, их хранение на месте <br /> отслеживается, а их установка <br /> планируется и контролируется.</p>

          </div>
        </div>
        <div className='w-[300px] flex'>
          <img className='w-[50px] h-[50px]' src={logo6} alt="" />
          <div>
            <p>Сборные панели</p>
            <p>Сборные панели прибывают по <br /> очереди, их хранение на месте <br /> отслеживается, а их установка <br /> планируется и контролируется.</p>

          </div>
        </div>
        <div className='w-[300px] flex'>
          <img className='w-[50px] h-[50px]' src={logo7} alt="" />
          <div>
            <p>Сборные панели</p>
            <p>Сборные панели прибывают по <br /> очереди, их хранение на месте <br /> отслеживается, а их установка <br /> планируется и контролируется.</p>

          </div>
        </div>
        <div className='w-[300px] flex'>
          <img className='w-[50px] h-[50px]' src={logo8} alt="" />
          <div>
            <p>Сборные панели</p>
            <p>Сборные панели прибывают по <br /> очереди, их хранение на месте <br /> отслеживается, а их установка <br /> планируется и контролируется.</p>
          </div>
        </div>
        <div className='w-[300px] flex'>
          <img className='w-[50px] h-[50px]' src={logo9} alt="" />
          <div>
            <p>Сборные панели</p>
            <p>Сборные панели прибывают по <br /> очереди, их хранение на месте <br /> отслеживается, а их установка <br /> планируется и контролируется.</p>
          </div>
        </div>
      </section>
      <h1 className='text-center font-medium text-[25px] font-serif'>Надёжность</h1>
      <p className='text-center font-serif text-[#72787D] p-[30px]'>Благодаря надёжному строительству выигрывают все - муниципальные органы <br /> выполняют свои обязанности перед гражданами, инвесторы получают сертификаты <br /> своих проектов, а генеральные подрядчики получают повышенную репутацию.</p>
      <Button sx={{marginLeft:"45%", border:'1px solid grey'}}onClick={()=>setAddModal(true)}>Add New</Button>
      <input
  value={searchQuery}
  onInput={SearchChange}
  className='border-[1px] border-[black] rounded-[10px] h-[35px] ml-[30px]'
  type="search"
/>

      <Box sx={{display:'flex', justifyContent:'space-between', padding:'30px', textAlign:'center'}}>
      {filteredData.map((e)=>{
        return <MyCard image={e.image} name={e.name} desc={e.desc} key={e.id}
        onEdit={() => openEditModal(e.id)}
        onDelete={() => deleteCard(e.id)}
        />
       
      })}
           {addModal && (
            <div className='border-[2px solid black]'>
              <div className='w-[50%] '>
                <h2>Add New Card</h2>
                <input
                  value={addImage}
                  onChange={(e) => setAddImage(e.target.value)}
                  type="text"
                  placeholder="Image URL"
                />
                <input
                  value={addName}
                  onChange={(e) => setAddName(e.target.value)}
                  type="text"
                  placeholder="Name"
                />
                <input
                  value={addDesc}
                  onChange={(e) => setAddDesc(e.target.value)}
                  type="text"
                  placeholder="Description"
                />
                <Button onClick={addCard}>Add Card</Button>
                <Button onClick={() => setAddModal(false)}>Close</Button>
              </div>
            </div>
          )}
    </Box>
    </>
  )
}

export default App
