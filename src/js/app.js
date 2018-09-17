import '../scss/main.scss'
import { timer } from 'rxjs'

const { log } = console

timer(1000, 2000).subscribe(log)
