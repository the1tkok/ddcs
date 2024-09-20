// pages/index.tsx
import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Index: React.FC = () => {
  const [cpuUsage, setCpuUsage] = useState<number>(50);
  const [gpuUsage, setGpuUsage] = useState<number>(50);

  const handleCpuChange = (event: Event, newValue: number | number[]) => {
    setCpuUsage(newValue as number);
  };

  const handleGpuChange = (event: Event, newValue: number | number[]) => {
    setGpuUsage(newValue as number);
  };

  useEffect(() => {
    // Simulate CPU usage
    const cpuInterval = setInterval(() => {
      const start = Date.now();
      while (Date.now() - start < cpuUsage * 10) {}
    }, 1000);

    return () => clearInterval(cpuInterval);
  }, [cpuUsage]);

  useEffect(() => {
    // Simulate GPU usage
    const gpuInterval = setInterval(() => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('webgl');
      const buffer = new Uint8Array(1024 * 1024);

      ctx!.bufferData(ctx!.ARRAY_BUFFER, buffer, ctx!.STATIC_DRAW);
    }, 1000);

    return () => clearInterval(gpuInterval);
  }, [gpuUsage]);

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        CPU Usage 2
      </Typography>
      <Slider value={cpuUsage} onChange={handleCpuChange} />

      <Typography variant="h4" gutterBottom mt={3}>
        GPU Usage
      </Typography>
      <Slider value={gpuUsage} onChange={handleGpuChange} />
    </Box>
  );
};

export default Index;
