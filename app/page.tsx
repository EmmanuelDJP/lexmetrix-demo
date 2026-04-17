'use client';
import { useState } from 'react';

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
  },
  {
    id: "laboral_02",
    titulo: "4. Laboral - Incidente Falsedad (Caso Real)",
    materia: "Tercera Sala (Laboral)",
    texto_expediente: "La empresa presentó una simple fotocopia de un recibo de vacaciones alegando que el original se extravió, pero el trabajador desconoce esa firma indicando que es falsa. Según el Artículo 16 del Código de Trabajo y la jurisprudencia en casación sobre desconocimiento de firma en fotocopias, ¿qué valor probatorio tiene ese documento y cómo fallan los magistrados ante este incidente procesal?",
    dictamen: `**DICTAMEN AUDITORÍA LEGAL - PROTOCOLO CAJA NEGRA**\n\n**MATERIA:** Incidente de Prueba - Desconocimiento de Firma sobre Fotocopia de Recibo de Vacaciones.\n**DISPOSICIONES CLAVE:** Artículo 16 del Código de Trabajo de la República Dominicana.\n\n**ANÁLISIS DE PRUEBAS (ART. 16 CT): VALOR PROBATORIO DEL DOCUMENTO**\n\n1. **Carga de la Prueba:** Conforme al Artículo 16 del Código de Trabajo, la carga de la prueba recae *siempre sobre el empleador*. La empresa invoca el pago de vacaciones y es su responsabilidad demostrarlo fehacientemente.\n\n2. **Naturaleza de la Prueba:** Una fotocopia carece de la fuerza probatoria plena a menos que sea cotejada. La alegación de extravío del original no subsana la deficiencia formal inherente a la copia cuando su autenticidad es disputada.\n\n3. **Desconocimiento de Firma:** El desconocimiento explícito anula la presunción de autenticidad. Al haber sido declarado "extraviado" el original, un peritaje grafotécnico sobre la fotocopia es inviable.\n\n**MAGISTRADO DE ADMISIONES: FILTRO DE VIABILIDAD**\n\nUn Magistrado operando bajo el "Perfil de Rigor" de la Tercera Sala proyectaría el colapso procesal de la pretensión del empleador. \n\n* En el **Expediente núm. 0478-2020-ELAB-00020**, se demostró la intolerancia del tribunal a la falta de precisión probatoria y superficialidad.\n* En el **Expediente núm. RECA-00669**, se casó una sentencia por "falta de base legal" al no realizar una valoración integral de pruebas.\n\n**CONCLUSIÓN:**\nUna simple fotocopia con el original extraviado y firma alegada como falsa, posee un **valor probatorio nulo**. La empresa asume un riesgo procesal inminente de ver su defensa colapsar en este punto.`
  }
];

export default function LexMetrixDemo() {
  const [casoActivo, setCasoActivo] = useState(CASOS_DEMO[0]);
  const [isAuditing, setIsAuditing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Tu número real inyectado
  const miNumeroWhatsApp = "18294067883"; 
  const mensajePredefinido = "Hola Emmanuel. Vi el demo de LexMetrix y me interesa hacer una prueba gratuita con un recurso de casación real que tengo. ¿Cómo procedemos?";
  const linkWhatsApp = `https://api.whatsapp.com/send?phone=${miNumeroWhatsApp}&text=${encodeURIComponent(mensajePredefinido)}`;

  const ejecutarAuditoria = () => {
    setIsAuditing(true);
    setShowResult(false);

    setTimeout(() => {
      setIsAuditing(false);
      setShowResult(true);
      // Scroll seguro nativo solo si el objeto window existe
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      
      {/* HEADER CLÁSICO */}
      <header className="bg-white border-b border-slate-200 px-6 py-5 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
              LexMetrix <span className="text-blue-600">Auditor</span>
            </h1>
            <p className="text-xs text-slate-500 font-medium">Motor de Admisibilidad Ley núm. 2-23</p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Online</span>
          </div>
        </div>
      </header>

      {/* GRID NATURAL: 1 Columna en móvil, 2 Columnas en PC */}
      <main className="max-w-6xl mx-auto p-4 md:p-6 mt-4 grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* PANEL IZQUIERDO: CONTROLES */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-100 px-4 py-3 border-b border-slate-200">
              <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider">1. Seleccione Expediente</h2>
            </div>
            <div className="p-4 space-y-3">
              {CASOS_DEMO.map((caso) => (
                <button
                  key={caso.id}
                  onClick={() => {
                    setCasoActivo(caso);
                    setShowResult(false);
                  }}
                  className={`w-full text-left p-4 rounded-lg border text-sm transition-colors ${
                    casoActivo.id === caso.id 
                    ? 'bg-blue-50 border-blue-400 text-blue-900 font-bold shadow-sm border-l-4 border-l-blue-600' 
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {caso.titulo}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={ejecutarAuditoria}
            disabled={isAuditing}
            className="w-full bg-slate-900 hover:bg-black text-white font-bold py-5 px-4 text-lg rounded-xl shadow-lg transition-transform active:scale-95 disabled:bg-slate-400 flex justify-center items-center gap-3"
          >
            {isAuditing ? (
              <>
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Auditando...
              </>
            ) : (
              '2. Ejecutar Auditoría'
            )}
          </button>
        </div>

        {/* PANEL DERECHO: VISOR DE DATOS */}
        <div className="md:col-span-8 flex flex-col gap-6">
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="bg-slate-100 px-4 py-3 border-b border-slate-200">
              <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Datos Extraídos ({casoActivo.materia})</h3>
            </div>
            <div className="p-6">
              <p className="text-slate-700 text-base leading-relaxed">
                {casoActivo.texto_expediente}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 min-h-[400px] flex flex-col">
            <div className="bg-slate-100 px-4 py-3 border-b border-slate-200">
              <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Dictamen LexMetrix</h3>
            </div>
            
            <div className="p-6 flex-1 flex flex-col justify-center">
              {isAuditing && (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-slate-500 font-semibold animate-pulse">Aplicando filtros jurisprudenciales (Ley 2-23)...</p>
                </div>
              )}

              {showResult && !isAuditing && (
                <div className="animate-fade-in space-y-8">
                  <div className="bg-slate-50 border-l-4 border-slate-900 p-6 rounded-r-xl shadow-sm">
                    <pre className="whitespace-pre-wrap font-serif text-slate-900 text-base leading-relaxed">
                      {casoActivo.dictamen}
                    </pre>
                  </div>
                  
                  <div className="bg-blue-900 rounded-xl p-8 text-center shadow-lg">
                    <h4 className="text-lg md:text-xl font-bold text-white mb-3">¿Va a someter un recurso pronto?</h4>
                    <p className="text-blue-200 mb-6 text-sm md:text-base max-w-lg mx-auto">
                      Evite el rechazo de la Suprema Corte y la condena en costas. Audite su borrador antes de depositarlo.
                    </p>
                    <a 
                      href={linkWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full md:w-auto bg-green-500 hover:bg-green-400 text-slate-900 font-extrabold py-4 px-8 rounded-lg shadow-md transition-transform active:scale-95 text-base"
                    >
                      Contactar Auditoría Privada (WhatsApp)
                    </a>
                  </div>
                </div>
              )}

              {!showResult && !isAuditing && (
                <div className="flex items-center justify-center py-20 text-slate-400 font-medium border-2 border-dashed border-slate-200 rounded-xl">
                  Seleccione un caso y ejecute la auditoría.
                </div>
              )}
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}