
import Link from 'next/link'




export default function Retour() {
    return (

        <div class="">
            <Link href="/" scroll={false}>
                <div class="flex-none flex cursor-pointer items-center mx-auto justify-center rounded-full gradientbtn">

                        <div class="flex-none flex items-center cursor-pointer mx-auto justify-center  rounded-full glassbtn">
                        <buttom class="flex-none flex items-center mx-auto justify-center rounded-full bg-white blankbtn cursor-pointers " >
                            <a>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 12H3M3 12L10 5M3 12L10 19" stroke="#000" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                </a>
                            </buttom>
                        </div>
                </div>
            </Link>
        </div>
        

    )
  }
  
