import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button, Container, useEventCallback } from '@mui/material';

export default function Demo01() {
  const [count, setSount] = useState<number>(0)

  const handleCount = useEventCallback( () => {
    setSount(prev => prev + 1)
  })

  return (
    <Container>
    <Typography variant="h3" gutterBottom>
      Demo01 Page      
    </Typography>

      <Button onClick={handleCount} size='large' variant='contained'>{count}</Button>
      
    </Container>
  );
}