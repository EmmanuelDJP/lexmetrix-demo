'use client';
import { useState } from 'react';

// --- BASE DE DATOS SIMULADA (Tus JSONs pre-procesados) ---
const CASOS_DEMO = [
  {
    id: "civil_01",
    titulo: "1. Caso Civil - Vicio de Indivisibilidad (Trampa)",
    materia: "Primera Sala (Civil)",
    texto_expediente: "Recurso de casación contra sentencia de mayo 2024 sobre demanda en partición de bienes. Condena al pago de RD$ 1,000,000.00. La parte recurrida alega falta de notificación del emplazamiento a uno de los co-herederos (Juan Pérez).",
    dictamen: `**SUPREMA CORTE DE JUSTICIA**
**PRIMERA SALA**

**RESOLUCIÓN DE ADMISIBILIDAD**

En la ciudad de Santo Domingo de Guzmán, Distrito Nacional, República Dominicana, a la fecha de la presente resolución.

Visto el recurso de casación interpuesto contra la sentencia dictada en mayo de 2024.

**CONSIDERANDO PRIMERO:** Que el recurso de casación en materia civil es admisible cuando la cuantía excede cincuenta (50) salarios mínimos (Art. 11.3, Ley núm. 2-23). Considerando el salario de 2024, el umbral es RD$1,249,500.00. La condena de RD$1,000,000.00 es inferior al mínimo requerido.

**CONSIDERANDO SEGUNDO:** Que, adicionalmente, en litigios indivisibles como la partición, la omisión de emplazamiento a un co-heredero vulnera el derecho de defensa y el principio contradictorio, acarreando la caducidad total conforme a los Arts. 19, 20 y 45.

**POR TANTO:** La Primera Sala de la Suprema Corte de Justicia,

**RESUELVE:**
**PRIMERO:** DECLARAR INADMISIBLE el recurso de casación por las razones expuestas.
**SEGUNDO:** Condenar a la parte recurrente al pago de costas.`
  },
  {
    id: "laboral_01",
    titulo: "2. Caso Laboral - Riesgo por Cuantía",
    materia: "Tercera Sala (Laboral)",
    texto_expediente: "Recurso de casación laboral del año 2023 por despido injustificado. La corte a qua condenó al empleador al pago de prestaciones laborales equivalentes a RD$ 350,000.00. El abogado somete el recurso alegando violación a la ley.",
    dictamen: `**SUPREMA CORTE DE JUSTICIA**
**TERCERA SALA**

**RESOLUCIÓN DE ADMISIBILIDAD**

En la ciudad de Santo Domingo de Guzmán, Distrito Nacional, República Dominicana, a la fecha de la presente resolución.

Visto el recurso de casación interpuesto contra la sentencia dictada en 2023.

**CONSIDERANDO PRIMERO:** Que en materia laboral, el recurso de casación solo es admisible si el monto de la condena excede los veinte (20) salarios mínimos. Para el año 2023, el salario mínimo aplicable era de RD$ 24,150.00, fijando el umbral de admisibilidad en RD$ 483,000.00. 

**CONSIDERANDO SEGUNDO:** Que al ser la condena de RD$ 350,000.00, esta resulta inferior al umbral legal exigido, constituyendo un defecto insubsanable de orden público.

**POR TANTO:** La Tercera Sala de la Suprema Corte de Justicia,

**RESUELVE:**
**PRIMERO:** DECLARAR INADMISIBLE el recurso de casación por insuficiencia de cuantía.
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
    // Simulamos el retraso de Vertex AI (2.5 segundos)
    setTimeout(() => {
      setIsAuditing(false);
      setShowResult(true);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabecera */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">LexMetrix <span className="text-blue-600">Auditor</span></h1>
          <p className="mt-2 text-slate-600">Demostración B2B: Filtro de Admisibilidad Ley núm. 2-23</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Panel Izquierdo: Selección de Casos */}
          <div className="col-span-1 bg-white p-6 rounded-lg shadow border border-slate-200">
            <h2 className="text-lg font-semibold mb-4 text-slate-800">1. Seleccione un Caso de Estudio</h2>
            <div className="space-y-3">
              {CASOS_DEMO.map((caso) => (
                <button
                  key={caso.id}
                  onClick={() => {
                    setCasoActivo(caso);
                    setShowResult(false);
                  }}
                  className={`w-full text-left p-3 rounded-md border text-sm transition-colors ${
                    casoActivo.id === caso.id ? 'bg-blue-50 border-blue-400 text-blue-800 font-medium' : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  {caso.titulo}
                </button>
              ))}
            </div>
            
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-4 text-slate-800">2. Ejecutar Análisis</h2>
              <button
                onClick={ejecutarAuditoria}
                disabled={isAuditing}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-md transition-colors disabled:bg-slate-400"
              >
                {isAuditing ? 'Auditando Jurisprudencia...' : 'Ejecutar Auditoría Ley 2-23'}
              </button>
            </div>
          </div>

          {/* Panel Derecho: Visor del Expediente y Resultados */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            
            <div className="bg-white p-6 rounded-lg shadow border border-slate-200">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Expediente a Evaluar ({casoActivo.materia})</h3>
              <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded border border-slate-100">
                {casoActivo.texto_expediente}
              </p>
            </div>

            {/* Panel de Resultados */}
            <div className="bg-white p-6 rounded-lg shadow border border-slate-200 min-h-[300px]">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Dictamen de LexMetrix</h3>
              
              {isAuditing && (
                <div className="flex flex-col items-center justify-center h-48 space-y-4">
                  <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm text-slate-500 font-medium animate-pulse">Aplicando reglas de indivisibilidad y umbrales matemáticos...</p>
                </div>
              )}

              {showResult && !isAuditing && (
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r">
                  <pre className="whitespace-pre-wrap font-serif text-slate-800 text-sm leading-relaxed">
                    {casoActivo.dictamen}
                  </pre>
                  
                  <div className="mt-8 pt-4 border-t border-red-200">
                    <p className="text-xs text-slate-500 text-center font-semibold">
                      ¿Quieres auditar un caso real tuyo? Contáctanos para una prueba gratuita.
                    </p>
                  </div>
                </div>
              )}

              {!showResult && !isAuditing && (
                <div className="flex items-center justify-center h-48 text-slate-400 text-sm">
                  Presiona "Ejecutar Auditoría" para procesar el expediente.
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}