'use client';
import { useState } from 'react';

// --- BASE DE DATOS SIMULADA (Tus JSONs pre-procesados) ---
const CASOS_DEMO = [
  {
    id: "civil_01",
    titulo: "1. Caso Civil - Vicio de Indivisibilidad (Trampa Oculta)",
    materia: "Primera Sala (Civil)",
    texto_expediente: "Recurso de casación contra sentencia de mayo 2024 sobre demanda en partición de bienes. Condena al pago de RD$ 1,000,000.00. La parte recurrente argumenta interés casacional, pero la parte recurrida alega falta de notificación del emplazamiento a uno de los co-herederos (Juan Pérez).",
    dictamen: `**SUPREMA CORTE DE JUSTICIA**
**PRIMERA SALA**

**RESOLUCIÓN DE ADMISIBILIDAD**

En la ciudad de Santo Domingo de Guzmán, Distrito Nacional, República Dominicana, a la fecha de la presente resolución.

Visto el recurso de casación interpuesto contra la sentencia dictada en mayo de 2024.

**CONSIDERANDO PRIMERO:** Que el recurso de casación en materia civil es admisible cuando la cuantía excede cincuenta (50) salarios mínimos (Art. 11.3, Ley núm. 2-23). Considerando el salario de 2024, el umbral es RD$1,249,500.00. La condena de RD$1,000,000.00 es inferior al mínimo requerido. La simple invocación de interés casacional no subsana este defecto de orden público.

**CONSIDERANDO SEGUNDO:** Que, adicionalmente, en litigios indivisibles como la partición, la omisión de emplazamiento a un co-heredero vulnera el derecho de defensa y el principio contradictorio, acarreando la caducidad total conforme a los Arts. 19, 20 y 45.

**POR TANTO:** La Primera Sala de la Suprema Corte de Justicia, en atribuciones que le confiere la Ley núm. 2-23,

**RESUELVE:**
**PRIMERO:** DECLARAR INADMISIBLE Y CADUCO el recurso de casación por las razones expuestas.
**SEGUNDO:** Condenar a la parte recurrente al pago de costas.`
  },
  {
    id: "laboral_01",
    titulo: "2. Caso Laboral - Doble Riesgo (Cuantía + Plazo)",
    materia: "Tercera Sala (Laboral)",
    texto_expediente: "Recurso de casación laboral por despido injustificado del año 2023. La corte a qua condenó al empleador al pago de RD$ 350,000.00. El recurso fue depositado en la Secretaría de la Corte veinticinco (25) días después de la notificación de la sentencia.",
    dictamen: `**SUPREMA CORTE DE JUSTICIA**
**TERCERA SALA**

**RESOLUCIÓN DE ADMISIBILIDAD**

En la ciudad de Santo Domingo de Guzmán, Distrito Nacional, República Dominicana, a la fecha de la presente resolución.

Visto el recurso de casación interpuesto contra la sentencia dictada en 2023.

**CONSIDERANDO PRIMERO:** Que en materia laboral, el recurso de casación solo es admisible si el monto de la condena excede los veinte (20) salarios mínimos. Para el año 2023 (salario de RD$ 24,150.00), el umbral de admisibilidad es de RD$ 483,000.00. Al ser la condena de RD$ 350,000.00, resulta inferior al umbral legal exigido.

**CONSIDERANDO SEGUNDO:** Que, a mayor abundamiento, se constata que el recurso fue depositado veinticinco (25) días después de la notificación, excediendo el plazo perentorio de veinte (20) días establecido en la Ley núm. 2-23, configurándose la extemporaneidad y caducidad del mismo.

**POR TANTO:** La Tercera Sala de la Suprema Corte de Justicia, en atribuciones que le confiere la Ley núm. 2-23,

**RESUELVE:**
**PRIMERO:** DECLARAR INADMISIBLE Y CADUCO el recurso de casación por insuficiencia de cuantía y extemporaneidad.
**SEGUNDO:** Ordenar el archivo definitivo del expediente.`
  }
];

export default function LexMetrixDemo() {
  const [casoActivo, setCasoActivo] = useState(CASOS_DEMO[0]);
  const [isAuditing, setIsAuditing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const ejecutarAuditoria = () => {
    setIsAuditing(true);
    setShowResult(false);
    setTimeout(() => {
      setIsAuditing(false);
      setShowResult(true);
    }, 2800); // 2.8s de tensión psicológica
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
          
          {/* Panel Izquierdo */}
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

          {/* Panel Derecho */}
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
                {showResult && (
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full animate-fade-in">
                    ⚡ Completado en 2.8s
                  </span>
                )}
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
                  
                  {/* Call To Action Agresivo */}
                  <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-6 text-center">
                    <h4 className="text-lg font-bold text-blue-900 mb-2">¿Vas a someter un recurso pronto? No te arriesgues.</h4>
                    <p className="text-blue-700 mb-4 text-sm">LexMetrix detecta vicios letales antes de que la Suprema rechace tu caso y te condene al pago de costas.</p>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); alert('Aquí irá tu enlace de WhatsApp (ej. wa.me/1809XXX)'); }}
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