'use client';
import { useState } from 'react';

// --- BASE DE DATOS SIMULADA (3 Casos Estratégicos) ---
const CASOS_DEMO = [
  {
    id: "civil_01",
    titulo: "1. Caso Civil - Vicio de Indivisibilidad",
    materia: "Primera Sala (Civil)",
    texto_expediente: "Recurso de casación contra sentencia de mayo 2024 sobre demanda en partición de bienes. Condena al pago de RD$ 1,000,000.00. La parte recurrente argumenta interés casacional, pero la parte recurrida alega falta de notificación del emplazamiento a uno de los co-herederos (Juan Pérez).",
    dictamen: `**SUPREMA CORTE DE JUSTICIA**\n**PRIMERA SALA**\n\n**RESOLUCIÓN DE ADMISIBILIDAD**\n\nEn la ciudad de Santo Domingo de Guzmán, Distrito Nacional, República Dominicana, a la fecha de la presente resolución.\n\nVisto el recurso de casación interpuesto contra la sentencia dictada en mayo de 2024.\n\n**CONSIDERANDO PRIMERO:** Que el recurso de casación en materia civil es admisible cuando la cuantía excede cincuenta (50) salarios mínimos (Art. 11.3, Ley núm. 2-23). Considerando el salario de 2024, el umbral es RD$1,249,500.00. La condena de RD$1,000,000.00 es inferior al mínimo requerido. La simple invocación de interés casacional no subsana este defecto de orden público.\n\n**CONSIDERANDO SEGUNDO:** Que, adicionalmente, en litigios indivisibles como la partición, la omisión de emplazamiento a un co-heredero vulnera el derecho de defensa y el principio contradictorio, acarreando la caducidad total conforme a los Arts. 19, 20 y 45.\n\n**POR TANTO:** La Primera Sala de la Suprema Corte de Justicia, en atribuciones que le confiere la Ley núm. 2-23,\n\n**RESUELVE:**\n**PRIMERO:** DECLARAR INADMISIBLE Y CADUCO el recurso de casación por las razones expuestas.\n**SEGUNDO:** Condenar a la parte recurrente al pago de costas.`
  },
  {
    id: "laboral_01",
    titulo: "2. Caso Laboral - Riesgo de Cuantía (< 20 Salarios)",
    materia: "Tercera Sala (Laboral)",
    texto_expediente: "Recurso de casación laboral por despido injustificado del año 2024. La corte a qua condenó al empleador al pago de RD$ 150,000.00. El recurso invoca violaciones constitucionales y el Art. 12 sobre interés casacional para justificar su admisibilidad.",
    dictamen: `**SUPREMA CORTE DE JUSTICIA**\n**TERCERA SALA**\n\n**RESOLUCIÓN DE ADMISIBILIDAD**\n\nEn la ciudad de Santo Domingo de Guzmán, Distrito Nacional, República Dominicana, a la fecha de la presente resolución.\n\nVisto el recurso de casación interpuesto contra la sentencia dictada en 2024.\n\n**CONSIDERANDO PRIMERO:** Que la sentencia impugnada condena a la parte recurrente al pago de RD$ 150,000.00. Que para la materia laboral, el umbral mínimo de admisibilidad es de veinte (20) salarios mínimos, lo que para 2024 equivale a RD$ 499,800.00.\n\n**CONSIDERANDO SEGUNDO:** Que el monto condenado no supera el umbral legalmente establecido, haciendo el recurso inadmisible. La invocación del interés casacional (Art. 12, Ley núm. 2-23) no subsana la falta de cuantía mínima exigida por la ley.\n\n**POR TANTO:** La Tercera Sala de la Suprema Corte de Justicia,\n\n**RESUELVE:**\n**PRIMERO:** DECLARAR INADMISIBLE el recurso de casación por insuficiencia de cuantía.\n**SEGUNDO:** Condenar a la parte recurrente al pago de las costas.`
  },
  {
    id: "civil_02",
    titulo: "3. Caso Civil - Condena Millonaria (Trampa de Plazo)",
    materia: "Primera Sala (Civil)",
    texto_expediente: "Recurso de casación comercial. Condena de RD$ 5,500,000.00 (Supera ampliamente los 50 salarios). La sentencia de la Corte de Apelación fue notificada el 1 de marzo de 2024. El recurso fue depositado en secretaría el 28 de marzo de 2024.",
    dictamen: `**SUPREMA CORTE DE JUSTICIA**\n**PRIMERA SALA**\n\n**RESOLUCIÓN DE ADMISIBILIDAD**\n\nEn la ciudad de Santo Domingo de Guzmán, Distrito Nacional, República Dominicana, a la fecha de la presente resolución.\n\nVisto el recurso de casación interpuesto contra la sentencia dictada en 2024.\n\n**CONSIDERANDO PRIMERO:** Que si bien la condena pecuniaria (RD$ 5,500,000.00) supera holgadamente el umbral de los cincuenta (50) salarios mínimos exigidos por el Art. 11.3 de la Ley núm. 2-23, el tribunal debe verificar de oficio el cumplimiento de los plazos procesales.\n\n**CONSIDERANDO SEGUNDO:** Que el artículo 14 de la Ley núm. 2-23 establece un plazo perentorio de veinte (20) días hábiles para la interposición del recurso. Habiéndose notificado la sentencia el 1 de marzo y depositado el recurso el 28 de marzo, el plazo se encontraba vencido, configurándose la extemporaneidad.\n\n**POR TANTO:** La Primera Sala de la Suprema Corte de Justicia,\n\n**RESUELVE:**\n**PRIMERO:** DECLARAR CADUCO el recurso de casación por haber sido interpuesto fuera del plazo legal.\n**SEGUNDO:** Condenar a la parte recurrente al pago de las costas.`
  }
];

export default function LexMetrixDemo() {
  const [casoActivo, setCasoActivo] = useState(CASOS_DEMO[0]);
  const [isAuditing, setIsAuditing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // 👇 REGLA ESTRICTA: Exactamente 11 dígitos. Sin +, sin espacios, sin guiones. 
  // Ejemplo: "18091234567" o "18291234567"
  const miNumeroWhatsApp = "18294067883"; 
  
  const mensajePredefinido = "Hola Emmanuel. Vi el demo de LexMetrix y me interesa hacer una prueba gratuita con un recurso de casación real que tengo. ¿Cómo procedemos?";
  
  // Endpoint de API robusto (Reemplaza el wa.me)
  const linkWhatsApp = `https://api.whatsapp.com/send?phone=${miNumeroWhatsApp}&text=${encodeURIComponent(mensajePredefinido)}`;

  const ejecutarAuditoria = () => {
    setIsAuditing(true);
    setShowResult(false);
    setTimeout(() => {
      setIsAuditing(false);
      setShowResult(true);
    }, 2800);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            LexMetrix <span className="text-blue-600">Auditor</span>
          </h1>
          <p className="mt-3 text-lg text-slate-600 font-medium">Demostración B2B: Filtro de Admisibilidad Ley núm. 2-23</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="col-span-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-fit">
            <h2 className="text-lg font-bold mb-4 text-slate-800 flex items-center gap-2">
              <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-sm">1</span> 
              Seleccione un Caso de Prueba
            </h2>
            <div className="space-y-3">
              {CASOS_DEMO.map((caso) => (
                <button
                  key={caso.id}
                  onClick={() => {
                    setCasoActivo(caso);
                    setShowResult(false);
                  }}
                  className={`w-full text-left p-4 rounded-lg border text-sm transition-all duration-200 ${
                    casoActivo.id === caso.id 
                    ? 'bg-blue-50 border-blue-400 text-blue-900 font-semibold shadow-sm' 
                    : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  {caso.titulo}
                </button>
              ))}
            </div>
            
            <div className="mt-10">
              <h2 className="text-lg font-bold mb-4 text-slate-800 flex items-center gap-2">
                <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-sm">2</span> 
                Ejecutar Motor LexMetrix
              </h2>
              <button
                onClick={ejecutarAuditoria}
                disabled={isAuditing}
                className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4 px-6 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all disabled:bg-slate-300 disabled:transform-none disabled:shadow-none"
              >
                {isAuditing ? 'Auditando Jurisprudencia...' : 'Ejecutar Auditoría Ley 2-23'}
              </button>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Expediente de Entrada ({casoActivo.materia})</h3>
              <p className="text-slate-700 leading-relaxed bg-slate-50 p-5 rounded-lg border border-slate-100 text-lg">
                {casoActivo.texto_expediente}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 min-h-[400px] flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Dictamen de LexMetrix</h3>
              </div>
              
              {isAuditing && (
                <div className="flex-grow flex flex-col items-center justify-center space-y-5">
                  <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-slate-600 font-medium animate-pulse">Aplicando matriz de caducidad y escrutinio procesal...</p>
                </div>
              )}

              {showResult && !isAuditing && (
                <div className="animate-fade-in flex-grow flex flex-col">
                  <div className="mb-4 text-center">
                    <p className="text-sm font-semibold text-slate-500 bg-slate-100 inline-block px-4 py-1 rounded-full">
                      👇 Esto es lo que recibirías en menos de 30 segundos con tu caso real.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 border-l-4 border-slate-800 p-6 rounded-r-lg flex-grow">
                    <pre className="whitespace-pre-wrap font-serif text-slate-800 text-sm md:text-base leading-relaxed">
                      {casoActivo.dictamen}
                    </pre>
                  </div>
                  
                  <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-6 text-center">
                    <h4 className="text-lg font-bold text-blue-900 mb-2">¿Vas a someter un recurso pronto? No te arriesgues.</h4>
                    <p className="text-blue-700 mb-4 text-sm">LexMetrix detecta vicios letales antes de que la Suprema rechace tu caso y te condene al pago de costas.</p>
                    <a 
                      href={linkWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow transition-colors"
                    >
                      Audita tu caso real GRATIS (Vía WhatsApp)
                    </a>
                  </div>
                </div>
              )}

              {!showResult && !isAuditing && (
                <div className="flex-grow flex items-center justify-center text-slate-400 text-base border-2 border-dashed border-slate-100 rounded-lg bg-slate-50">
                  El dictamen aparecerá aquí luego de ejecutar el motor.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}