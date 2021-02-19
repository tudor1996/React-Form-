import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormLabel } from "react-bootstrap";

const Demo = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [caseval, setCaseval] = useState(false);
    const [skill, setSkill] = useState("Frontend");
    const [lang, setLang] = useState(0);

    return (
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={ev => setEmail(ev.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={pass} onChange={ev => setPass(ev.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" checked={caseval} onChange={() => setCaseval(!caseval)} label="Check me out" />
          </Form.Group>

          <Form.Label>
              Skill:
          </Form.Label>

          <Form.Check
          type="radio"
          label="Front-end"
          name="radiob"
          checked={skill === 'Frontend'}
          value="Frontend"
          onClick={() => setSkill('Frontend')}
        />

        <Form.Check
          type="radio"
          label="Back-end"
          name="radiob"
          checked={skill === 'Backend'}
          value="Backend"
          onClick={() => setSkill('Backend')}
        />
        
        <Form.Check
          type="radio"
          label="Full-stack"
          name="radiob"
          checked={skill === 'Fullstack'}
          value="Fullstack"
          onClick={() => setSkill('Fullstack')}
          />

    <Form.Group>
      <Form.Label>
        Main programming language:
      </Form.Label>
    <Form.Control as="select" value={lang} onChange={ev => setLang(ev.target.value)}>
        <option value="0">Choose...</option>
        <option value="1">C++</option>
        <option value="2">JavaScript</option>
        <option value="3">C#</option>
        <option value="4">Java</option>
        <option value="5">PHP</option>
    </Form.Control>
    </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>


      );
    }; 
 
export default Demo;