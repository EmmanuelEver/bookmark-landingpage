import { useState } from 'react'
import styles from '../styles/Contact.module.scss'

const Contact = () => {
    const [email, setEmail] = useState();
    const [error, setError] = useState(false)

    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(validateEmail(email)) {
            setEmail("");
            setError(false)
        }
        else{
            setError(true);
            alert("please use a valid email");
        }

    };
    return (
        <section className={styles.wrapper}>
            <div className={styles.content}>
                <p>
                    35,000+ already joined 
                </p>
                <h2>
                    Stay up-to-date with what we’re doing
                </h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={error ? styles.error : ""}
                    />
                    <button type="submit"> Contact Us </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
