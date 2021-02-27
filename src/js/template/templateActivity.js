import templateHead from "./templateHead";
import * as THREE from 'three';


const draw = () => {
  // const canvas = document.createElement('canvas');
  const widthRatio = 425/668;
  const heightRatio = 112/376;
  // canvas.width = window.innerWidth * widthRatio;
  // canvas.height = window.innerHeight * heightRatio;
  // canvas.style.marginLeft = 'auto'
  // canvas.style.marginRight = 'auto'
  // canvas.style.display = 'block'


  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight,  0.1, 1000 );
  const scene = new THREE.Scene();

  var geometry = new THREE.BoxGeometry(40, 20, 40)
  const material = new THREE.MeshBasicMaterial( { color: 'red', wireframe   : true  } );// side: THREE.BackSide
  const cube = new THREE.Mesh( geometry, material );
  cube.rotation.y =  0.5;

  scene.add( cube );
  camera.position.x = 100;
  camera.position.y = 200;
  camera.position.z = 400;
  camera.lookAt(cube.position);

  renderer.render( scene, camera );

  // document.body.append(canvas)

  // const ctx = canvas.getContext('2d');
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  //
  // const drawCube = (x, y, wx, wy, h = 8, gradient = []) => {
  //
  //
  //   //left
  //   ctx.beginPath();
  //   ctx.moveTo(x, y);
  //   ctx.lineTo(x - wx, y - wy); // 2
  //   ctx.lineTo(x - wx, y + h); // 3
  //   ctx.lineTo(x, y + wy + h); // 4
  //   ctx.closePath();
  //
  //   const gradientLeft = ctx.createLinearGradient(x - wx, y - wy, x - wx, y + h);// 2,3
  //   gradientLeft.addColorStop(0, 'rgba(62, 57, 52, 0.7)');
  //   gradientLeft.addColorStop(1, 'rgba(34, 31, 28, 0.7)');
  //
  //   ctx.fillStyle = gradientLeft;
  //   ctx.stroke();
  //   ctx.fill();
  //
  //   //right
  //   ctx.beginPath();
  //   ctx.moveTo(x, y);
  //   ctx.lineTo(x + wx, y - wy); // 2
  //   ctx.lineTo(x + wx, y + h); // 3
  //   ctx.lineTo(x, y + wy + h); // 4
  //   ctx.closePath();
  //
  //   const gradientRight= ctx.createLinearGradient(x + wx, y - wy, x + wx, y + h);// 2,3
  //   gradientRight.addColorStop(0, 'rgba(62, 57, 52, 0.7)');
  //   gradientRight.addColorStop(1, 'rgba(34, 31, 28, 0.7)');
  //
  //   ctx.fillStyle = gradientRight;
  //   ctx.stroke();
  //   ctx.fill();
  //
  //   //top
  //   ctx.beginPath();
  //   ctx.moveTo(x, y);
  //   ctx.lineTo(x - wx, y - wy); // 2
  //   ctx.lineTo(x, y - wy * 2); // 3
  //   ctx.lineTo(x + wx, y - wy); // 4
  //
  //   const gradientTop = ctx.createLinearGradient(x - wx, y - wy, x, y - wy * 2);// 2,3
  //   gradientTop.addColorStop(0, 'rgba(62, 57, 52, 0.7)');
  //   gradientTop.addColorStop(1, 'rgba(34, 31, 28, 0.7)');
  //
  //   ctx.closePath();
  //   ctx.fillStyle = gradientTop;
  //   ctx.stroke();
  //   ctx.fill();
  //
  // }
  // // Сторона ромба равна 20.808652046684813
  //
  // drawCube(
  //   20, // первая точка
  //   25, // первый ряд
  //   17,
  //   12,
  //   8,
  // ); // fig 1
  // drawCube(
  //   54,// шаг 34
  //   25,
  //   17,
  //   12,
  //   8,
  // );// fig 2
  // drawCube(
  //   88,
  //   25,
  //   17,
  //   12,
  //   20,
  //   'red'
  // );// fig 2







}


export default (item) => {
  const htmlHead = templateHead(item)
  draw()

  return htmlHead
}

