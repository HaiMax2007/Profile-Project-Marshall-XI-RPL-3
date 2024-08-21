import '../styles/modern-normalize.css'
import '../styles/style.css'
import '../styles/components/header.css'
import '../styles/components/hero.css'
import '../styles/components/agus.css'
import '../styles/components/evan.css'
import '../styles/components/marshall.css'
import '../styles/utils.css'

const agusBtn = document.getElementById('agus__detail');
const evanBtn = document.getElementById('evan__detail');
const marshallBtn = document.getElementById('marshall__detail');

agusBtn.addEventListener("click", () => {
    const agusData = document.getElementById('agus__data');
    agusData.classList.toggle('hidden');
})
evanBtn.addEventListener("click", () => {
    const evanData = document.getElementById('evan__data');
    evanData.classList.toggle('hidden');
})
marshallBtn.addEventListener("click", () => {
    const marshallData = document.getElementById('marshall__data');
    marshallData.classList.toggle('hidden');
})