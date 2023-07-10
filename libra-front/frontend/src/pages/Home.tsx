import { Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [message, setMessage] = useState("");
  let [messages, setMessages] = useState([
    { ID: 0, Sentence: "qazxswedcvfrtggbnhyumkilopqazxswedcvfrtggbnhyumkilopqazxswedcvfrtggbnhyumkilopqazxswedcvfrtggbnhyumkilop", UpdatedAt: "" },
  ]);

  const handleInputMessageChange = (event: any) => {
    setMessage(event.target.value);
  };

  const submit = () =>{
    const formData = new URLSearchParams();
    formData.append('sentence', message);

    // Send a POST request with FormValue data
    axios.post('http://localhost:9000/', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        console.log('Response:', response.data);
        update();

      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const update = () =>{
    axios.get('http://localhost:9000/')
    .then(response =>{
      setMessages(response.data);
      console.log(messages);
    })
  }

  const deletePost = (id:Number) =>{
    axios.delete(`http://localhost:9000/${id}`)
    .then(_ =>{
      update();
    })
  }
 
  useEffect(() =>{
    update();
  },[])

  return (
    <Grid>
      <Grid container alignItems="center" justifyContent="center" spacing={1}>
        <Grid item xs={4}>
          <TextField fullWidth label="文章" value={message} onChange={handleInputMessageChange} size="small" />
        </Grid>
        <Grid item xs={1}>
          <Button fullWidth variant="contained" color="primary" onClick={submit}>
            送信
          </Button>
        </Grid>
      </Grid>
      <Grid sx={{mt:'100px'}}>
      {
        messages !== null &&
          messages.map((m) => {
            return (
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                spacing={1}
              >
                <Grid item xs={3}>
                  <TextField disabled fullWidth value={m.Sentence} size="small" />
                </Grid>
                <Grid item xs={0.5}>
                  <Button fullWidth variant="contained" color="primary" onClick={()=>deletePost(m.ID)}>
                    削除
                  </Button>
                </Grid>
              </Grid>
            );
          })
        }
      </Grid>
      
    </Grid>
  );
}
export default Home;
