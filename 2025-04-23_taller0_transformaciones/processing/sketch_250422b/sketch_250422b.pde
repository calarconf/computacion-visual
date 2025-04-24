void setup() {
  size(800, 600, P3D);
  smooth();
  frameRate(60);
}

void draw() {
  background(240);
  
  // Configuración de iluminación básica
  lights();
  
  // Centramos el sistema de coordenadas
  translate(width/2, height/2);
  
  // Dibujamos un eje de referencia
  drawAxis();
  
  // Aplicamos transformaciones al cubo
  pushMatrix(); // Aislamos las transformaciones
  
  // Traslación ondulada usando sin() y frameCount
  float waveX = sin(frameCount * 0.05) * 150;
  float waveY = cos(frameCount * 0.03) * 100;
  translate(waveX, waveY, 0);
  
  // Rotación en los tres ejes
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.015);
  rotateZ(frameCount * 0.005);
  
  // Escalado cíclico usando millis() para que sea independiente del frameRate
  float scaleFactor = 1 + sin(millis() * 0.001) * 0.5;
  scale(scaleFactor);
  
  // Dibujamos el cubo con estilo
  fill(100, 100, 100, 200);
  stroke(100, 50, 50);
  strokeWeight(2);
  box(80);
  
  popMatrix(); // Restauramos las transformaciones
  
  // Información en pantalla
  fill(0);
  text("Frame: " + frameCount, 20, 20);
  text("Tiempo: " + millis()/1000 + "s", 20, 40);
}

void drawAxis() {
  // Eje X (rojo)
  stroke(255, 0, 0);
  line(-200, 0, 0, 200, 0, 0);
  
  // Eje Y (verde)
  stroke(0, 255, 0);
  line(0, -200, 0, 0, 200, 0);
  
  // Eje Z (azul) - solo visible en perspectiva 3D
  stroke(0, 0, 255);
  line(0, 0, -200, 0, 0, 200);
}
