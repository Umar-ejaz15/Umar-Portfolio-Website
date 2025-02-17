import  { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

const Roboava = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Spline scene="https://prod.spline.design/yCx91Kun7ViIk1HC/scene.splinecode" />
  </Suspense>
);

export default Roboava;
