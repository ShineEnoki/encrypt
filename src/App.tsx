import { useState, FormEvent } from 'react';
import  CryptoJS  from 'crypto-js';
import { BsArrowLeftRight } from 'react-icons/bs';
import { 
  RootContainer,
  ChangeProcess,
  ProcessBox, 
  Form,
  Textarea,
  Output,
  Button,
} from './App.style';

type Process = 'encrypt' | 'decrypt';


function App() {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [cipherKey, setCipherKey] = useState('');

  const [ process, setProcess ] = useState<Process>('encrypt');

  const handleChangeText = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('text', plainText);
    console.log('key', cipherKey);

    if (process === 'encrypt') {
      const encryptedText = CryptoJS.AES.encrypt(plainText, cipherKey).toString();
      console.log(encryptedText);
      setCipherText(encryptedText);
    } else if (process === 'decrypt') {
      const decryptedBytes = CryptoJS.AES.decrypt(cipherText, cipherKey);
      const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
      console.log(decryptedText);
      setPlainText(decryptedText);
    }
  };

  const handleProcessChange = () => {
    setProcess(prev => prev === 'encrypt' ? 'decrypt' : 'encrypt')
  }

  return (
    <RootContainer>
      <ChangeProcess>
        <ProcessBox> { process === 'encrypt' ? 'Original Text' : 'Cipher Text'} </ProcessBox>
        <BsArrowLeftRight onClick={handleProcessChange} />
        <ProcessBox> { process === 'encrypt' ? 'Encrypt Text' : 'Original Text'} </ProcessBox>
      </ChangeProcess>
      <Form
        onSubmit={handleChangeText}
        className='flex flex-col '
      >
        <Textarea
          onChange={e => setPlainText(e.target.value)}
          autoFocus
          placeholder='Enter your text'
        />
        <input
          onChange={e => setCipherKey(e.target.value)}
          autoFocus
          placeholder='Enter your encrypt key'
          type='text'
        />
        <Button type='submit'> Change </Button>
      </Form>


      <Output> {cipherText} </Output>
    </RootContainer>
  )
}

export default App
