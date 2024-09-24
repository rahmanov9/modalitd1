
const ProductsData = [
   {
      img: './img/card_1.png',
      title:'3D soft Curves',
      user:'💩 Esther Howard',
      price:'0.85'
   }, {
      img: './img/card_2.png',
      title:'The mystery of the black square',
      user:'🤢 Jenny Wilso ',
      price:'0.24'
   }, {
      img: './img/card_3.png',
      title:'Pink Cloud 🌥',
      user:'👺 Floyd Miles',
      price:'0.3'
   }, {
      img: './img/card-4.png',
      title:'3D Ethereum',
      user:'🐱‍👤 Jane Cooper',
      price:'0.12'
   }
]




const wrapper = document.querySelector('.live_wrapper1')
const cards = ProductsData.map(card => {
    return `
          <div class="live_card">
            <img src="${card.img}" />
            <div class="live_card-box">
              <h3>${card.title}</h3>

              <div>
                <p>${card.user}</p>
                <p>
                  Curret bid <br />
                  <b>${card.price} ETH </b>
                </p>
              </div>
            </div>
          </div>
   
    `
}).join('')
wrapper.innerHTML = cards


const ProductsData2 = [
   {
      img: './img/card_5.png',
      title:'3D soft Curves',
      user:'💩 Esther Howard',
      price:'0.85'
   },{
      img: './img/card_6.png',
      title:'3D soft Curves',
      user:'💩 Esther Howard',
      price:'0.85'
   },{
      img: './img/card_7.png',
      title:'3D soft Curves',
      user:'💩 Esther Howard',
      price:'0.85'
   },{
      img: './img/card_8.png',
      title:'3D soft Curves',
      user:'💩 Esther Howard',
      price:'0.85'
   },{
      img: './img/card_9.png',
      title:'3D soft Curves',
      user:'💩 Esther Howard',
      price:'0.85'
   },{
      img: './img/card_10.png',
      title:'3D soft Curves',
      user:'💩 Esther Howard',
      price:'0.85'
   },{
      img: './img/card_11.png',
      title:'3D soft Curves',
      user:'💩 Esther Howard',
      price:'0.85'
   },{
      img: './img/card_12.png',
      title:'3D soft Curves',
      user:'💩 Esther Howard',
      price:'0.85'
   },{
      img: './img/card_13.png',
      title:'3D soft Curves',
      user:'💩 Esther Howard',
      price:'0.85'
   },{
      img: './img/card_14.png',
      title:'3D soft Curves',
      user:'💩 Esther Howard',
      price:'0.85'
   },{
      img: './img/card_15.png',
      title:'3D soft Curves',
      user:'💩 Esther Howard',
      price:'0.85'
   },{
      img: './img/card_1.png',
      title:'3D soft Curves',
      user:'💩 Esther Howard',
      price:'0.85'
   },
]


const wrapper2 = document.querySelector('.live_wrapper2')
const cards2 = ProductsData2.map(card => {
    return `
          <div class="live_card">
            <img src="${card.img}" />
            <div class="live_card-box">
              <h3>${card.title}</h3>

              <div>
                <p>${card.user}</p>
                <p>
                  Curret bid <br />
                  <b>${card.price} ETH </b>
                </p>
              </div>
            </div>
          </div>
   
    `
}).join('')

wrapper2.innerHTML = cards2


const modal = document.querySelector('.modal')
const openModal = document.querySelector('#Connect-Wallet')
const closeModal = document.querySelector('.close')

openModal.onclick = () => {
   modal.classList.add('active')
}
closeModal.onclick = () => {
   modal.classList.remove('active')
}

const theme = document.querySelector('#theme')
const body = document.querySelector('body')

theme.onclick = () => {
body.classList.toggle('dark')
}