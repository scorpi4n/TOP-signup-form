import '/src/reset.css'
import '/src/style.css'

import sidebar from './components/sidebar'
import form from './components/form'

document.getElementById('sidebar-wrapper').appendChild(sidebar())
document.querySelector('.standout').appendChild(form())

import verifyPassword from './verifyPassword'
verifyPassword()