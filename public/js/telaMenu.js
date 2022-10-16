class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();


let corMod = 0
function openOptions(){
  if (corMod == 0){
    corMod = 1
    document.getElementById('menuInfos').style.display = 'block';

  } else{
    corMod = 0
    document.getElementById('menuInfos').style.display = 'none';
  }
} 

function infoFunction(){
  document.getElementById('menuInfos').style.display = 'none';
  document.getElementById('modal').style.display = 'block'
}

function closeModal(){
  document.getElementById('modal').style.display = 'none';
}

trokColor = 0
function trocarCor(){
  if(trokColor == 0){
    trokColor = 1
    document.getElementById('menu').style.backgroundColor = '#2f62b9';
    document.querySelector('#button-option1').style.backgroundColor = '#173a75';
    document.querySelector('#button-option2').style.backgroundColor = '#173a75';
    document.querySelector('#button-option3').style.backgroundColor = '#173a75';
    document.querySelector('#button-option4').style.backgroundColor = '#173a75';
    document.querySelector('#button-option5').style.backgroundColor = '#173a75';
    document.getElementById('trocarCor').style.background = '#173a75';
    document.getElementById('body').style.background = 'linear-gradient(-45deg, #173a75, rgb(70, 100, 145), #284d8d, #3079b4)';
    document.getElementById('normal').style.background = '#173a75';
    document.getElementById('menuInfos').style.background = '#173a759c';
    document.getElementById('colorInfor').style.color = '#4fa2e6';
    
  } else{
    trokColor = 0
    document.querySelector('#button-option1').style.backgroundColor = '#33195cbd';
    document.querySelector('#button-option2').style.backgroundColor = '#33195cbd';
    document.querySelector('#button-option3').style.backgroundColor = '#33195cbd';
    document.querySelector('#button-option4').style.backgroundColor = '#33195cbd';
    document.querySelector('#button-option5').style.backgroundColor = '#33195cbd';
    document.getElementById('trocarCor').style.background = '';
    document.getElementById('menu').style.backgroundColor = '#33195c';
    document.getElementById('body').style.background = '';
    document.getElementById('normal').style.background = '';
    document.getElementById('menuInfos').style.background = '#2512449c';
    document.getElementById('colorInfor').style.background = 'blueviolet';
  }
}