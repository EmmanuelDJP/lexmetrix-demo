'use client';
import { useState, useRef, useEffect } from 'react';

// --- BASE DE DATOS SIMULADA ---
const CASOS_DEMO = [
  {
    id: "civil_01",
    titulo: "1. Civil - Vicio de Indivisibilidad",
    materia: "Primera Sala (Civil)",
    texto_expediente: "Recurso de casación contra sentencia de mayo 2024 sobre demanda en partición de bienes. Condena al pago de RD$ 1,000,000.00. La parte recurrente argumenta interés casacional, pero la parte recurrida alega falta de notificación del emplazamiento a uno de los co-herederos (Juan Pérez).",
    dictamen: `**SUPREMA CORTE DE JUSTICIA**\n**PRIMERA SALA**\n\n**RESOLUCIÓN DE ADMISIBILIDAD**\n\nEn la ciudad de Santo Domingo de Guzmán, Distrito Nacional, República Dominicana, a la fecha de la presente resolución.\n\nVisto el recurso de casación interpuesto contra la sentencia dictada en mayo de 2024.\n\n**CONSIDERANDO PRIMERO:** Que el recurso de casación en materia civil es admisible cuando la cuantía excede cincuenta (50) salarios mínimos (Art. 11.3, Ley núm. 2-23). Considerando el salario de 2024, el umbral es RD$1,249,500.00. La condena de RD$1,000,000.00 es inferior al mínimo requerido. La simple invocación de interés casacional no subsana este defecto de orden público.\n\n**CONSIDERANDO SEGUNDO:** Que, adicionalmente, en litigios indivisibles como la partición, la omisión de emplazamiento a un co-heredero vulnera el derecho de defensa y el principio contradictorio, acarreando la caducidad total conforme a los Arts. 19, 20 y 45.\n\n**POR TANTO:** La Primera Sala de la Suprema Corte de Justicia, en atribuciones que le confiere la Ley núm. 2-23,\n\n**RESUELVE:**\n**PRIMERO:** DECLARAR INADMISIBLE Y CADUCO el recurso de casación por las razones expuestas.\n**SEGUNDO:** Condenar a la parte recurrente al pago de costas.`
  },
  {
    id: "laboral_01",
    titulo: "2. Laboral - Riesgo de Cuantía",
    materia: "Tercera Sala (Laboral)",
    texto_expediente: "Recurso de casación laboral por despido injustificado del año 2024. La corte a qua condenó al empleador al pago de RD$ 150,000.00. El recurso invoca violaciones constitucionales y el Art. 12 sobre interés casacional para justificar su admisibilidad.",
    dictamen: `**SUPREMA CORTE DE JUSTICIA**\n**TERCERA SALA**\n\n**RESOLUCIÓN DE ADMISIBILIDAD**\n\nEn la ciudad de Santo Domingo de Guzmán, Distrito Nacional, República Dominicana, a la fecha de la presente resolución.\n\nVisto el recurso de casación interpuesto contra la sentencia dictada en 2024.\n\n**CONSIDERANDO PRIMERO:** Que la sentencia impugnada condena a la parte recurrente al pago de RD$ 150,000.00. Que para la materia laboral, el umbral mínimo de admisibilidad es de veinte (20) salarios mínimos, lo que para 2024 equivale a RD$ 499,800.00.\n\n**CONSIDERANDO SEGUNDO:** Que el monto condenado no supera el umbral legalmente establecido, haciendo el recurso inadmisible. La invocación del interés casacional (Art. 12, Ley núm. 2-23) no subsana la falta de cuantía mínima exigida por la ley.\n\n**POR TANTO:** La Tercera Sala de la Suprema Corte de Justicia,\n\n**RESUELVE:**\n**PRIMERO:** DECLARAR INADMISIBLE el recurso de casación por insuficiencia de cuantía.\n**SEGUNDO:** Condenar a la parte recurrente al pago de las costas.`
  },
  {
    id: "civil_02",
    titulo: "3. Civil - Condena Millonaria (Trampa Plazo)",
    materia: "Primera Sala (Civil)",
    texto_expediente: "Recurso de casación comercial. Condena de RD$ 5,500,000.00 (Supera ampliamente los 50 salarios). La sentencia de la Corte de Apelación fue notificada el 1 de marzo de 2024. El recurso fue depositado en secretaría el 28 de marzo de 2024.",
    dictamen: `**SUPREMA CORTE DE JUSTICIA**\n**PRIMERA SALA**\n\n**RESOLUCIÓN DE ADMISIBILIDAD**\n\nEn la ciudad de Santo Domingo de Guzmán, Distrito Nacional, República Dominicana, a la fecha de la presente resolución.\n\nVisto el recurso de casación interpuesto contra la sentencia dictada en 2024.\n\n**CONSIDERANDO PRIMERO:** Que si bien la condena pecuniaria (RD$ 5,500,000.00) supera holgadamente el umbral de los cincuenta (50) salarios mínimos exigidos por el Art. 11.3 de la Ley núm. 2-23, el tribunal debe verificar de oficio el cumplimiento de los plazos procesales.\n\n**CONSIDERANDO SEGUNDO:** Que el artículo 14 de la Ley núm. 2-23 establece un plazo perentorio de veinte (20) días hábiles para la interposición del recurso. Habiéndose notificado la sentencia el 1 de marzo y depositado el recurso el 28 de marzo, el plazo se encontraba vencido, configurándose la extemporaneidad.\n\n**POR TANTO:** La Primera Sala de la Suprema Corte de Justicia,\n\n**RESUELVE:**\n**PRIMERO:** DECLARAR CADUCO el recurso de casación por haber sido interpuesto fuera del plazo legal.\n**SEGUNDO:** Condenar a la parte recurrente al pago de las costas.`
  }
];

export default function LexMetrixDemo() {
  const [casoActivo, setCasoActivo] = useState(CASOS_DEMO[0]);
  const [isAuditing, setIsAuditing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  
  // Referencia para hacer scroll automático en móviles
  const resultRef = useRef<HTMLDivElement>(null);

  // 👇 RECUERDA PONER TU NÚMERO REAL AQUÍ (Ej. "18091234567")
  const miNumeroWhatsApp = "18294067883"; 
  const mensajePredefinido = "Hola Emmanuel. Vi el demo de LexMetrix y me interesa hacer una prueba gratuita con un recurso de casación real que tengo. ¿Cómo procedemos?";
  const linkWhatsApp = `https://api.whatsapp.com/send?phone=${miNumeroWhatsApp}&text=${encodeURIComponent(mensajePredefinido)}`;

  const ejecutarAuditoria = () => {
    setIsAuditing(true);
    setShowResult(false);
    
    // Auto-scroll táctico en móviles hacia la zona de carga
    if (window.innerWidth < 1024 && resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setTimeout(() => {
      setIsAuditing(false);
      setShowResult(true);
    }, 2500);
  };

  return (
    // CAMBIO CRÍTICO: min-h-screen para móviles, lg:h-screen para PC
    <div className="min-h-screen lg:h-screen w-full bg-slate-100 flex flex-col lg:overflow-hidden font-sans text-slate-900">
      
      <header className="flex-shrink-0 bg-white border-b border-slate-200 px-4 md:px-6 py-4 flex justify-between items-center z-10 shadow-sm">
        <div>
          <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900">
            LexMetrix <span className="text-blue-600">Auditor</span>
          </h1>
          <p className="text-xs text-slate-500 font-medium">Motor de Admisibilidad Ley núm. 2-23</p>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Sistema B2B Online</span>
        </div>
      </header>

      {/* CAMBIO CRÍTICO: Scroll natural en móvil (overflow-y-auto), oculto en PC */}
      <main className="flex-1 overflow-y-auto lg:overflow-hidden p-4 md:p-6">
        <div className="h-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-3 gap-6">
          
          <div className="flex flex-col flex-shrink-0 lg:h-full bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 px-4 py-3 border-b border-slate-200">
              <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider">1. Expedientes de Prueba</h2>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {CASOS_DEMO.map((caso) => (
                <button
                  key={caso.id}
                  onClick={() => {
                    setCasoActivo(caso);
                    setShowResult(false);
                  }}
                  className={`w-full text-left p-4 rounded-lg border text-sm transition-all duration-200 ${
                    casoActivo.id === caso.id 
                    ? 'bg-blue-50 border-blue-400 text-blue-900 font-semibold shadow-sm border-l-4 border-l-blue-600' 
                    : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  {caso.titulo}
                </button>
              ))}
            </div>
            
            <div className="p-4 bg-white border-t border-slate-200">
              <button
                onClick={ejecutarAuditoria}
                disabled={isAuditing}
                className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4 px-4 text-base rounded-lg shadow-md transition-all disabled:bg-slate-300 flex justify-center items-center gap-2"
              >
                {isAuditing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Procesando...
                  </>
                ) : (
                  '2. Ejecutar Auditoría'
                )}
              </button>
            </div>
          </div>

          <div ref={resultRef} className="col-span-1 lg:col-span-2 flex flex-col flex-1 lg:h-full gap-6 lg:overflow-hidden">
            
            <div className="flex-shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-200">
                <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Datos Extraídos ({casoActivo.materia})</h3>
              </div>
              <div className="p-4">
                <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                  {casoActivo.texto_expediente}
                </p>
              </div>
            </div>

            <div className="flex-1 min-h-[400px] bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden relative">
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex justify-between items-center">
                <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Dictamen LexMetrix</h3>
                {showResult && (
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                    Completado
                  </span>
                )}
              </div>
              
              <div className="flex-1 lg:overflow-y-auto p-0 md:p-6 bg-slate-50">
                {isAuditing && (
                  <div className="h-full min-h-[300px] flex flex-col items-center justify-center space-y-4">
                    <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-slate-500 font-medium animate-pulse text-sm">Aplicando filtros jurisprudenciales...</p>
                  </div>
                )}

                {showResult && !isAuditing && (
                  <div className="animate-fade-in flex flex-col min-h-full">
                    <div className="bg-white border-l-4 border-slate-800 p-4 md:p-6 rounded-r-lg shadow-sm">
                      <pre className="whitespace-pre-wrap font-serif text-slate-800 text-sm md:text-base leading-relaxed">
                        {casoActivo.dictamen}
                      </pre>
                    </div>
                    
                    <div className="mt-6 bg-blue-900 rounded-lg p-6 text-center shadow-inner">
                      <h4 className="text-base font-bold text-white mb-2">Evita el rechazo de la Suprema Corte</h4>
                      <p className="text-blue-200 mb-4 text-sm">Audita tu recurso antes de someterlo. Evita condenas en costas por errores de forma.</p>
                      <a 
                        href={linkWhatsApp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 hover:bg-green-400 text-slate-900 font-bold py-3 px-6 rounded shadow transition-colors text-sm"
                      >
                        Contactar Auditoría Privada (WhatsApp)
                      </a>
                    </div>
                  </div>
                )}

                {!showResult && !isAuditing && (
                  <div className="h-full min-h-[300px] flex items-center justify-center text-slate-400 text-sm font-medium border-2 border-dashed border-slate-200 m-4 md:m-6 rounded-lg">
                    Esperando ejecución del motor...
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}