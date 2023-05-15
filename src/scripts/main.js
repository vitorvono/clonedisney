document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[data-tab-button]')
  const questions = document.querySelectorAll('[data-faq-question]')
  const heroSection = document.querySelector('.hero')
  const heightHero = heroSection.clientHeight

  window.addEventListener('scroll', function() {
    const posicaoAtual = window.scrollY

    posicaoAtual < heightHero 
    ? ocultaElementosHeader()
    : exibeElemtosHeader()
  })

  // Seção das atrações, programação das abas
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    
    button.addEventListener('click', function(buttonClick) {
      escondeTodasAbas()
      removerBotaoAtivo()

      buttonClick.target.classList.add('shows__tabs__button--is-active')
      const abaAlvo = buttonClick.target.dataset.tabButton
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)

      aba.classList.add('shows__list--is-active')
    })
  }

  // seção FAQ, accordion
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];

    question.addEventListener('click', toggleQuestions)
  }
})

function removerBotaoAtivo() {
  const buttons = document.querySelectorAll('[data-tab-button]')

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.classList.remove('shows__tabs__button--is-active')
  }
}

function escondeTodasAbas() {
  const tabsContainer = document.querySelectorAll('[data-tab-id]')

  for (let i = 0; i < tabsContainer.length; i++) {
    const tab = tabsContainer[i]
    
    tab.classList.remove('shows__list--is-active')
  }
}

function toggleQuestions(elemento) {
  const classe = "faq__questions__item--is-open"
  const elementoPai = elemento.target.parentNode
  
  elementoPai.classList.toggle(classe)
}

function ocultaElementosHeader() {
  const header = document.querySelector('header')
  header.classList.add('header--is-hidden')
}

function exibeElemtosHeader() {
  const header = document.querySelector('header')
  header.classList.remove('header--is-hidden')
}