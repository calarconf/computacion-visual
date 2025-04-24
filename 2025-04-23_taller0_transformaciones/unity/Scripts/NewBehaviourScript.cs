using UnityEngine;

public class TransformacionesOscilantes : MonoBehaviour
{
    // Configuración pública (visible en el Inspector)
    public float velocidadRotacion = 30f; // Grados por segundo
    public float velocidadOscilacionEscala = 1f; // Velocidad de cambio de escala
    public float rangoOscilacionEscala = 0.5f; // Rango de cambio de escala (0.5 = ±50%)
    public float intervaloTraslacion = 3f; // Segundos entre cambios de dirección
    
    // Variables privadas
    private Vector2 direccionTraslacion;
    private float velocidadTraslacion = 2f;
    private float tiempoUltimaTraslacion;
    private Vector3 escalaBase;

    void Start()
    {
        // Guardar la escala inicial del objeto
        escalaBase = transform.localScale;
        
        // Inicializar primera dirección aleatoria
        CambiarDireccionTraslacion();
    }

    void Update()
    {
        // 1. Rotación constante
        transform.Rotate(Vector3.forward, velocidadRotacion * Time.deltaTime);
        
        // 2. Traslación aleatoria cada cierto tiempo
        if (Time.time - tiempoUltimaTraslacion > intervaloTraslacion)
        {
            CambiarDireccionTraslacion();
            tiempoUltimaTraslacion = Time.time;
        }
        transform.Translate(direccionTraslacion * velocidadTraslacion * Time.deltaTime);
        
        // 3. Escalado oscilante
        float factorEscala = 1f + Mathf.Sin(Time.time * velocidadOscilacionEscala) * rangoOscilacionEscala;
        transform.localScale = escalaBase * factorEscala;
    }

    void CambiarDireccionTraslacion()
    {
        // Elige aleatoriamente entre moverse en X o Y
        if (Random.value > 0.5f)
        {
            direccionTraslacion = new Vector2(Random.Range(-1f, 1f), 0).normalized;
        }
        else
        {
            direccionTraslacion = new Vector2(0, Random.Range(-1f, 1f)).normalized;
        }
    }
}