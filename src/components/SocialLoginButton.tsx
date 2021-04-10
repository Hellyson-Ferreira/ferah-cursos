import style from '../styles/components/SocialLoginButton.module.css'

interface Props{
    image: string,
    

}

export default function SocialLoginButton({image}:Props){
    return(
        <button className={style.socialLoginButton}>
            <img src={image} alt=""/>
        </button>
    )
}