import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard({src}) {
  const [enlarged, setEnlarged] = useState(false);
  const cardRef = useRef(null);

  // Click outside to reset size
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !(cardRef.current as HTMLElement).contains(event.target as Node)) {
        setEnlarged(false);
      }
    }

    if (enlarged) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [enlarged]);

  return (
    <Card
      ref={cardRef}
      sx={{
        maxWidth: enlarged ? 600 : 345,
        transition: 'all 0.3s ease',
        transform: enlarged ? 'scale(2.05)' : 'scale(1)',
        zIndex: enlarged ? 10 : 1,
        position: 'relative',
      }}
      onClick={() => setEnlarged(true)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={src}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
