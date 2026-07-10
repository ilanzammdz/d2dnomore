"use client";

import { useState, useEffect, useRef } from "react";
import {
  CheckCircle, XCircle, Clock, BookOpen, PenLine,
  RotateCcw, Trophy, ChevronRight, Heart, Stethoscope, AlertCircle
} from "lucide-react";

// ─── Question Data ────────────────────────────────────────────────────────────

interface Pregunta {
  id: number;
  pregunta: string;
  respuesta: string;
  opciones: string[];
  categoria: string;
}

const PREGUNTAS: Pregunta[] = [
  {
    id: 1,
    pregunta: "¿Qué es la Hipotermia?",
    respuesta: "Disminución de la temperatura corporal por debajo de 30°C",
    opciones: [
      "Disminución de la temperatura corporal por debajo de 30°C",
      "Aumento de la temperatura corporal por encima de 38°C",
      "Temperatura corporal normal entre 36–37°C",
      "Fluctuación irregular de la temperatura durante el día",
    ],
    categoria: "Términos Médicos",
  },
  {
    id: 2,
    pregunta: "¿Qué es la Hipertensión?",
    respuesta: "Aumento de la fuerza ejercida contra las paredes de las arterias",
    opciones: [
      "Aumento de la fuerza ejercida contra las paredes de las arterias",
      "Disminución de la presión sanguínea en las arterias",
      "Frecuencia cardiaca elevada por encima de 100 lpm",
      "Reducción del volumen sanguíneo circulante",
    ],
    categoria: "Términos Médicos",
  },
  {
    id: 3,
    pregunta: "¿Qué es la Bradicardia?",
    respuesta: "Frecuencia cardiaca disminuida",
    opciones: [
      "Frecuencia cardiaca disminuida",
      "Frecuencia cardiaca elevada",
      "Irregularidad en el ritmo cardiaco",
      "Presión arterial disminuida",
    ],
    categoria: "Términos Médicos",
  },
  {
    id: 4,
    pregunta: "¿Qué es la Hipotensión?",
    respuesta: "Disminución de la presión arterial",
    opciones: [
      "Disminución de la presión arterial",
      "Aumento de la presión arterial",
      "Frecuencia cardiaca disminuida",
      "Dificultad para respirar",
    ],
    categoria: "Términos Médicos",
  },
  {
    id: 5,
    pregunta: "¿Qué es la Taquicardia?",
    respuesta: "Frecuencia cardiaca elevada",
    opciones: [
      "Frecuencia cardiaca elevada",
      "Frecuencia cardiaca disminuida",
      "Frecuencia respiratoria elevada",
      "Presión arterial elevada",
    ],
    categoria: "Términos Médicos",
  },
  {
    id: 6,
    pregunta: "¿Qué es la Disnea?",
    respuesta: "Dificultad para respirar",
    opciones: [
      "Dificultad para respirar",
      "Frecuencia cardiaca elevada",
      "Temperatura corporal elevada",
      "Disminución de la presión arterial",
    ],
    categoria: "Términos Médicos",
  },
  {
    id: 7,
    pregunta: "¿Cuál de las siguientes es una presentación de medicamento?",
    respuesta: "Elixir",
    opciones: ["Elixir", "Subcutánea", "Intramuscular", "Radial"],
    categoria: "Medicamentos",
  },
  {
    id: 8,
    pregunta: "¿Cuál de las siguientes es una vía PARENTERAL de administración de medicamentos?",
    respuesta: "Intramuscular",
    opciones: ["Intramuscular", "Oral", "Rectal", "Sublingual"],
    categoria: "Medicamentos",
  },
  {
    id: 9,
    pregunta: "¿Cuál es la vía de administración de medicamentos más antigua que existe?",
    respuesta: "Vía Enteral",
    opciones: ["Vía Enteral", "Vía Intravenosa", "Vía Subcutánea", "Vía Intramuscular"],
    categoria: "Medicamentos",
  },
  {
    id: 10,
    pregunta: "¿Cuál de los siguientes es un tipo de aguja identificada por color?",
    respuesta: "Negra",
    opciones: ["Negra", "Verde", "Naranja", "Morada"],
    categoria: "Medicamentos",
  },
  {
    id: 11,
    pregunta: "Para la aplicación subcutánea, ¿a cuántos grados se debe insertar la aguja?",
    respuesta: "45°",
    opciones: ["45°", "90°", "15°", "30°"],
    categoria: "Medicamentos",
  },
  {
    id: 12,
    pregunta: "¿Cuál es el medicamento más comúnmente usado por vía subcutánea?",
    respuesta: "La insulina",
    opciones: ["La insulina", "El paracetamol", "La amoxicilina", "El ibuprofeno"],
    categoria: "Medicamentos",
  },
  {
    id: 13,
    pregunta: "¿Qué son los métodos anticonceptivos?",
    respuesta: "Método para prevenir el embarazo y enfermedades de transmisión sexual",
    opciones: [
      "Método para prevenir el embarazo y enfermedades de transmisión sexual",
      "Tratamiento para infecciones del sistema reproductivo",
      "Procedimiento para detectar ETS en laboratorio",
      "Técnica médica para mejorar la fertilidad femenina",
    ],
    categoria: "Salud Sexual",
  },
  {
    id: 14,
    pregunta: "¿Cuál de los siguientes es un método anticonceptivo de BARRERA?",
    respuesta: "Diafragma",
    opciones: ["Diafragma", "Píldora anticonceptiva", "Inyección hormonal", "Parche hormonal"],
    categoria: "Salud Sexual",
  },
  {
    id: 15,
    pregunta: "¿Cuál de las siguientes es una enfermedad de transmisión sexual (ETS)?",
    respuesta: "Sífilis",
    opciones: ["Sífilis", "Tuberculosis", "Diabetes tipo 1", "Hipotensión"],
    categoria: "Salud Sexual",
  },
  {
    id: 16,
    pregunta: "¿Cuál de los siguientes es un tipo de lavado de manos?",
    respuesta: "Quirúrgico",
    opciones: ["Quirúrgico", "Preventivo", "Terapéutico", "Antiséptico"],
    categoria: "Higiene y Asepsia",
  },
  {
    id: 17,
    pregunta: "¿Cuánto tiempo debe durar el lavado de manos clínico?",
    respuesta: "De 40 a 60 segundos",
    opciones: ["De 40 a 60 segundos", "De 10 a 20 segundos", "De 5 a 10 minutos", "De 2 a 3 minutos"],
    categoria: "Higiene y Asepsia",
  },
  {
    id: 18,
    pregunta: "Según los 5 momentos del lavado de manos, ¿cuándo se debe realizar ANTES?",
    respuesta: "Antes de contacto con el paciente y antes de realizar una asepsia",
    opciones: [
      "Antes de contacto con el paciente y antes de realizar una asepsia",
      "Antes de comer y antes de ir al baño",
      "Antes de usar guantes y antes de tomar medicamentos",
      "Antes de escribir en el expediente y antes de salir del hospital",
    ],
    categoria: "Higiene y Asepsia",
  },
  {
    id: 19,
    pregunta: "¿Cuántas metas internacionales existen para la seguridad del paciente?",
    respuesta: "6 metas",
    opciones: ["6 metas", "5 metas", "8 metas", "10 metas"],
    categoria: "Seguridad del Paciente",
  },
  {
    id: 20,
    pregunta: "¿Cuál es la meta internacional que identifica correctamente al paciente?",
    respuesta: "Meta 1",
    opciones: ["Meta 1", "Meta 2", "Meta 3", "Meta 6"],
    categoria: "Seguridad del Paciente",
  },
  {
    id: 21,
    pregunta: "¿Qué son los Signos Vitales?",
    respuesta: "Parámetros clínicos que reflejan el estado del organismo humano",
    opciones: [
      "Parámetros clínicos que reflejan el estado del organismo humano",
      "Medicamentos de emergencia para salvar vidas",
      "Equipos de monitoreo para pacientes críticos",
      "Procedimientos quirúrgicos de emergencia",
    ],
    categoria: "Signos Vitales",
  },
  {
    id: 22,
    pregunta: "¿Qué es la temperatura corporal?",
    respuesta: "Expresión numérica del calor en el cuerpo",
    opciones: [
      "Expresión numérica del calor en el cuerpo",
      "Número de latidos por minuto",
      "Presión de la sangre en las arterias",
      "Número de ciclos respiratorios por minuto",
    ],
    categoria: "Signos Vitales",
  },
  {
    id: 23,
    pregunta: "¿Qué es la Frecuencia Respiratoria (FR)?",
    respuesta: "El número de ciclos respiratorios",
    opciones: [
      "El número de ciclos respiratorios",
      "La onda pulsátil de la sangre",
      "La temperatura corporal en reposo",
      "La presión del aire en los pulmones",
    ],
    categoria: "Signos Vitales",
  },
  {
    id: 24,
    pregunta: "¿Qué es la Frecuencia Cardiaca (FC)?",
    respuesta: "La onda pulsátil de la sangre percibida por los dedos",
    opciones: [
      "La onda pulsátil de la sangre percibida por los dedos",
      "El número de ciclos respiratorios por minuto",
      "La presión de la sangre contra las arterias",
      "La temperatura corporal en reposo",
    ],
    categoria: "Signos Vitales",
  },
  {
    id: 25,
    pregunta: "¿Qué es la Presión Arterial?",
    respuesta: "La presión de la sangre contra la pared de las arterias",
    opciones: [
      "La presión de la sangre contra la pared de las arterias",
      "La velocidad con que circula la sangre",
      "El volumen total de sangre en el cuerpo",
      "La cantidad de oxígeno en la sangre",
    ],
    categoria: "Signos Vitales",
  },
  {
    id: 26,
    pregunta: "Las vías de administración de medicamentos se clasifican principalmente en:",
    respuesta: "Enteral y Parenteral",
    opciones: ["Enteral y Parenteral", "Oral e Inyectable", "Interna y Externa", "Sistémica y Local"],
    categoria: "Medicamentos",
  },
  {
    id: 27,
    pregunta: "¿Cuál de los siguientes es un tipo de herida?",
    respuesta: "Contusión",
    opciones: ["Contusión", "Vendaje", "Curación", "Asepsia"],
    categoria: "Heridas y Curaciones",
  },
  {
    id: 28,
    pregunta: "¿Cuál es el objetivo principal de una curación?",
    respuesta: "Prevenir una infección",
    opciones: [
      "Prevenir una infección",
      "Eliminar el dolor inmediatamente",
      "Reducir la temperatura corporal",
      "Aumentar la presión arterial",
    ],
    categoria: "Heridas y Curaciones",
  },
  {
    id: 29,
    pregunta: "¿Cuál de los siguientes es un tipo de vendaje?",
    respuesta: "Espiral",
    opciones: ["Espiral", "Transversal", "Diagonal", "Horizontal"],
    categoria: "Heridas y Curaciones",
  },
  {
    id: 30,
    pregunta: "¿Cuál de los siguientes es un cuidado básico para el adulto mayor?",
    respuesta: "Higiene corporal",
    opciones: [
      "Higiene corporal",
      "Administración de insulina diaria",
      "Lavado de manos quirúrgico",
      "Control de signos vitales cada 15 minutos",
    ],
    categoria: "Cuidados Especiales",
  },
  {
    id: 31,
    pregunta: "¿Qué incluyen los cuidados Post-mortem?",
    respuesta: "Preparar el cuerpo, entregar pertenencias a familiares y avisarles lo sucedido",
    opciones: [
      "Preparar el cuerpo, entregar pertenencias a familiares y avisarles lo sucedido",
      "Aplicar medicamentos de emergencia y llamar al médico",
      "Trasladar al paciente a otra unidad hospitalaria",
      "Administrar oxígeno y tomar signos vitales",
    ],
    categoria: "Cuidados Especiales",
  },
  {
    id: 32,
    pregunta: "¿Qué es la Farmacocinética?",
    respuesta: "Cómo el organismo procesa el fármaco",
    opciones: [
      "Cómo el organismo procesa el fármaco",
      "Lo que el fármaco hace en el organismo",
      "Los efectos secundarios de los medicamentos",
      "La dosis máxima permitida de un fármaco",
    ],
    categoria: "Farmacología",
  },
  {
    id: 33,
    pregunta: "¿Qué es la Farmacodinamia?",
    respuesta: "Lo que el fármaco hace en el organismo",
    opciones: [
      "Lo que el fármaco hace en el organismo",
      "Cómo el organismo procesa el fármaco",
      "La velocidad de absorción del medicamento",
      "La eliminación del fármaco por la orina",
    ],
    categoria: "Farmacología",
  },
  {
    id: 34,
    pregunta: "Según la clasificación RPBI, ¿qué se desecha en la BOLSA ROJA?",
    respuesta: "Todo lo que tenga sangre fresca",
    opciones: [
      "Todo lo que tenga sangre fresca",
      "Tejidos de cirugías y necropsia",
      "Empaques de medicamentos",
      "Agujas y envases de vidrio",
    ],
    categoria: "RPBI y Residuos",
  },
  {
    id: 35,
    pregunta: "Según la clasificación RPBI, ¿qué se desecha en la BOLSA AMARILLA?",
    respuesta: "Tejidos de cirugías y necropsia",
    opciones: [
      "Tejidos de cirugías y necropsia",
      "Todo lo que tenga sangre fresca",
      "Empaques de medicamentos",
      "Agujas y envases de vidrio",
    ],
    categoria: "RPBI y Residuos",
  },
  {
    id: 36,
    pregunta: "¿Cuál de las siguientes es una vacuna de la cartilla infantil?",
    respuesta: "BCG",
    opciones: ["BCG", "Insulina", "Ondansetrón", "Adrenalina"],
    categoria: "Vacunas",
  },
  {
    id: 37,
    pregunta: "¿Cuál es un beneficio de la lactancia materna para el BEBÉ?",
    respuesta: "Ayuda al bebé a crecer sano",
    opciones: [
      "Ayuda al bebé a crecer sano",
      "Aumenta la presión arterial del bebé",
      "Reduce la frecuencia cardiaca materna",
      "Previene la diabetes gestacional en la madre",
    ],
    categoria: "Puericultura",
  },
  {
    id: 38,
    pregunta: "¿Qué es la Puericultura?",
    respuesta: "La crianza de niños",
    opciones: [
      "La crianza de niños",
      "El cuidado del adulto mayor",
      "La ciencia que estudia las enfermedades infantiles",
      "La rama de la medicina que estudia el embarazo",
    ],
    categoria: "Puericultura",
  },
  {
    id: 39,
    pregunta: "¿Cuál es la vía de administración que se aplica a 45°?",
    respuesta: "Subcutánea",
    opciones: ["Subcutánea", "Intramuscular", "Intravenosa", "Intradérmica"],
    categoria: "Medicamentos",
  },
  {
    id: 40,
    pregunta: "¿Cuál es la vacuna que previene la tuberculosis?",
    respuesta: "BCG",
    opciones: ["BCG", "DPT", "Triple Viral", "SABIN"],
    categoria: "Vacunas",
  },
  {
    id: 41,
    pregunta: "¿Cuáles son las siglas para iniciar un RCP?",
    respuesta: "CAB",
    opciones: ["CAB", "ABC", "ACB", "BAC"],
    categoria: "Emergencias",
  },
  {
    id: 42,
    pregunta: "La salud se define como:",
    respuesta: "Un estado de bienestar físico",
    opciones: [
      "Un estado de bienestar físico",
      "La ausencia total de enfermedades crónicas",
      "La capacidad de trabajar sin cansancio",
      "Una temperatura corporal normal de 36°C",
    ],
    categoria: "Conceptos Básicos",
  },
  {
    id: 43,
    pregunta: "¿Qué es la Enfermería?",
    respuesta: "La ciencia que estudia el cuidado y la salud del ser humano",
    opciones: [
      "La ciencia que estudia el cuidado y la salud del ser humano",
      "El arte de diagnosticar enfermedades en el hospital",
      "La técnica para administrar medicamentos de forma segura",
      "La especialidad médica que atiende pacientes críticos",
    ],
    categoria: "Conceptos Básicos",
  },
  {
    id: 44,
    pregunta: "¿Qué acción ayuda principalmente a prevenir infecciones?",
    respuesta: "Lavado de manos",
    opciones: [
      "Lavado de manos",
      "Uso permanente de guantes",
      "Administrar antibióticos preventivos",
      "Cambiar el uniforme cada hora",
    ],
    categoria: "Higiene y Asepsia",
  },
  {
    id: 45,
    pregunta: "¿Con qué se evalúan los parámetros clínicos del paciente?",
    respuesta: "Los signos vitales",
    opciones: [
      "Los signos vitales",
      "El expediente clínico",
      "Las órdenes médicas",
      "Los análisis de laboratorio",
    ],
    categoria: "Signos Vitales",
  },
  {
    id: 46,
    pregunta: "¿Cuál de los siguientes es un tipo de diabetes?",
    respuesta: "Diabetes Gestacional",
    opciones: ["Diabetes Gestacional", "Diabetes Crónica", "Diabetes Aguda", "Diabetes Hereditaria"],
    categoria: "Enfermedades",
  },
  {
    id: 47,
    pregunta: "¿Cuál de los siguientes es un tipo de pulso?",
    respuesta: "Radial",
    opciones: ["Radial", "Pulmonar", "Intestinal", "Hepático"],
    categoria: "Signos Vitales",
  },
  {
    id: 48,
    pregunta: "¿Cuál es la fórmula para calcular la dosis de un medicamento?",
    respuesta: "Dosis indicada (mg) × Diluyente (ml) ÷ Presentación del medicamento",
    opciones: [
      "Dosis indicada (mg) × Diluyente (ml) ÷ Presentación del medicamento",
      "Presentación (mg) × Tiempo (h) ÷ Dosis indicada",
      "Dosis indicada ÷ Peso del paciente × Tiempo",
      "Diluyente (ml) ÷ Dosis indicada × Frecuencia",
    ],
    categoria: "Cálculos Médicos",
  },
  {
    id: 49,
    pregunta: "¿Cuántos ml se aplican de Ondansetrón 5 mg con 4 ml de diluyente y presentación de 8 mg?",
    respuesta: "2.5 ml",
    opciones: ["2.5 ml", "1.5 ml", "4.0 ml", "3.2 ml"],
    categoria: "Cálculos Médicos",
  },
  {
    id: 50,
    pregunta: "¿Cuántas gotas por minuto se necesitan para pasar 1000 cc en 6 horas?",
    respuesta: "56 gotas por minuto",
    opciones: ["56 gotas por minuto", "28 gotas por minuto", "100 gotas por minuto", "42 gotas por minuto"],
    categoria: "Cálculos Médicos",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return m > 0 ? `${m}:${sec.toString().padStart(2, "0")}` : `${sec}s`;
}

type Resultado = "correcto" | "incorrecto" | "tiempo";
type Modo = "multiple" | "escrito";
type Pantalla = "inicio" | "juego" | "resultados";

// ─── Pantalla Inicio ──────────────────────────────────────────────────────────

function PantallaInicio({ onIniciar }: { onIniciar: (m: Modo) => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ background: "linear-gradient(135deg,#04081A 0%,#061220 60%,#04081A 100%)" }}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden style={{ backgroundSize: "50px 50px", backgroundImage: "linear-gradient(to right,rgba(16,185,129,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(16,185,129,0.04) 1px,transparent 1px)" }} />

      <div className="relative z-10 w-full max-w-lg text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,rgba(16,185,129,0.2),rgba(16,185,129,0.05))", border: "1px solid rgba(16,185,129,0.3)" }}>
            <Stethoscope className="w-10 h-10" style={{ color: "#10B981" }} />
          </div>
        </div>

        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", color: "rgba(52,211,153,0.8)" }}>
          Enfermería · Guía Examen Final
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
          Tarjetas de<br />
          <span style={{ background: "linear-gradient(90deg,#10B981,#34D399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Estudio
          </span>
        </h1>

        <p className="text-white/50 text-sm mb-3 leading-relaxed">
          Maestra: Isabel Martínez Raeyna
        </p>
        <p className="text-white/40 text-sm mb-10 leading-relaxed max-w-sm mx-auto">
          {PREGUNTAS.length} preguntas del examen final. Elige tu modo de estudio para comenzar.
        </p>

        <div className="flex flex-col gap-4">
          {/* Opción múltiple */}
          <button
            onClick={() => onIniciar("multiple")}
            className="w-full rounded-2xl p-5 text-left transition-all hover:scale-[1.02] active:scale-[0.99]"
            style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.25)" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}>
                <BookOpen className="w-6 h-6" style={{ color: "#10B981" }} />
              </div>
              <div className="flex-1 text-left">
                <p className="text-white font-bold text-base">Opción Múltiple</p>
                <p className="text-white/45 text-sm">4 opciones · 30 segundos por pregunta</p>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(16,185,129,0.15)", color: "#34D399" }}>
                <Clock className="w-3 h-3" />
                30s
              </div>
            </div>
          </button>

          {/* Escrito */}
          <button
            onClick={() => onIniciar("escrito")}
            className="w-full rounded-2xl p-5 text-left transition-all hover:scale-[1.02] active:scale-[0.99]"
            style={{ background: "rgba(6,182,212,0.07)", border: "1px solid rgba(6,182,212,0.25)" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.3)" }}>
                <PenLine className="w-6 h-6" style={{ color: "#06B6D4" }} />
              </div>
              <div className="flex-1 text-left">
                <p className="text-white font-bold text-base">Respuesta Escrita</p>
                <p className="text-white/45 text-sm">Escribe tu respuesta · 2 minutos por pregunta</p>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(6,182,212,0.15)", color: "#67E8F9" }}>
                <Clock className="w-3 h-3" />
                2min
              </div>
            </div>
          </button>
        </div>

        <p className="text-white/20 text-xs mt-8">Las preguntas se muestran en orden aleatorio cada sesión</p>
      </div>
    </div>
  );
}

// ─── Pantalla Resultados ──────────────────────────────────────────────────────

function PantallaResultados({
  puntaje, total, historial, modo, onReiniciar
}: {
  puntaje: number; total: number; historial: Resultado[]; modo: Modo; onReiniciar: () => void;
}) {
  const pct = Math.round((puntaje / total) * 100);
  const correctas = historial.filter(r => r === "correcto").length;
  const incorrectas = historial.filter(r => r === "incorrecto").length;
  const tiempoAgotado = historial.filter(r => r === "tiempo").length;

  const mensaje = pct >= 90 ? "¡Excelente! Estás lista para el examen 🏆" :
    pct >= 70 ? "¡Muy bien! Sigue repasando los temas difíciles 📚" :
    pct >= 50 ? "Vas por buen camino, ¡no te rindas! 💪" :
    "Sigue estudiando, ¡tú puedes lograrlo! ❤️";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ background: "linear-gradient(135deg,#04081A 0%,#061220 60%,#04081A 100%)" }}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden style={{ backgroundSize: "50px 50px", backgroundImage: "linear-gradient(to right,rgba(16,185,129,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(16,185,129,0.04) 1px,transparent 1px)" }} />

      <div className="relative z-10 w-full max-w-md text-center">
        <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: pct >= 70 ? "rgba(16,185,129,0.15)" : "rgba(234,179,8,0.12)", border: `2px solid ${pct >= 70 ? "rgba(16,185,129,0.4)" : "rgba(234,179,8,0.35)"}` }}>
          <Trophy className="w-12 h-12" style={{ color: pct >= 70 ? "#10B981" : "#F59E0B" }} />
        </div>

        <h2 className="text-4xl font-extrabold text-white mb-1">
          {pct}<span className="text-2xl text-white/50">%</span>
        </h2>
        <p className="text-white/50 text-sm mb-2">{puntaje} de {total} correctas</p>
        <p className="text-white/70 text-sm font-medium mb-8">{mensaje}</p>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="rounded-xl p-4" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}>
            <p className="text-2xl font-black" style={{ color: "#10B981" }}>{correctas}</p>
            <p className="text-xs text-white/40 mt-1">Correctas</p>
          </div>
          <div className="rounded-xl p-4" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
            <p className="text-2xl font-black" style={{ color: "#EF4444" }}>{incorrectas}</p>
            <p className="text-xs text-white/40 mt-1">Incorrectas</p>
          </div>
          <div className="rounded-xl p-4" style={{ background: "rgba(234,179,8,0.08)", border: "1px solid rgba(234,179,8,0.2)" }}>
            <p className="text-2xl font-black" style={{ color: "#F59E0B" }}>{tiempoAgotado}</p>
            <p className="text-xs text-white/40 mt-1">Sin tiempo</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={onReiniciar}
            className="w-full py-4 rounded-2xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90"
            style={{ background: "linear-gradient(90deg,#059669,#10B981)" }}
          >
            <RotateCcw className="w-4 h-4" />
            Volver a Jugar
          </button>
        </div>

        <p className="text-white/20 text-xs mt-6">
          {modo === "multiple" ? "Modo: Opción Múltiple · 30s por pregunta" : "Modo: Respuesta Escrita · 2 min por pregunta"}
        </p>
      </div>
    </div>
  );
}

// ─── Timer Circle ─────────────────────────────────────────────────────────────

function TimerCircle({ tiempo, total, color }: { tiempo: number; total: number; color: string }) {
  const r = 26;
  const circ = 2 * Math.PI * r;
  const pct = tiempo / total;
  const offset = circ * (1 - pct);

  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <svg className="absolute inset-0 -rotate-90" width="64" height="64">
        <circle cx="32" cy="32" r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="4" />
        <circle
          cx="32" cy="32" r={r} fill="none"
          stroke={color} strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.9s linear, stroke 0.5s" }}
        />
      </svg>
      <span className="text-white font-black text-sm z-10">{formatTime(tiempo)}</span>
    </div>
  );
}

// ─── Main Game ────────────────────────────────────────────────────────────────

export default function EnfermeriaPage() {
  const [pantalla, setPantalla] = useState<Pantalla>("inicio");
  const [modo, setModo] = useState<Modo>("multiple");
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
  const [indice, setIndice] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [tiempoRestante, setTiempoRestante] = useState(30);
  const [respondido, setRespondido] = useState(false);
  const [seleccionada, setSeleccionada] = useState<string | null>(null);
  const [respuestaEscrita, setRespuestaEscrita] = useState("");
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);
  const [historial, setHistorial] = useState<Resultado[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const tiempoTotal = modo === "multiple" ? 30 : 120;
  const preguntaActual = preguntas[indice];
  const esUltima = indice === preguntas.length - 1;
  const pctTiempo = tiempoRestante / tiempoTotal;
  const colorTimer = pctTiempo > 0.5 ? "#10B981" : pctTiempo > 0.2 ? "#F59E0B" : "#EF4444";

  const limpiarTimer = () => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  };

  // Timer effect
  useEffect(() => {
    if (pantalla !== "juego" || respondido) return;
    limpiarTimer();

    timerRef.current = setInterval(() => {
      setTiempoRestante(prev => {
        if (prev <= 1) {
          limpiarTimer();
          setRespondido(true);
          setMostrarRespuesta(true);
          setHistorial(h => [...h, "tiempo"]);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return limpiarTimer;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indice, pantalla, respondido]);

  const iniciarJuego = (m: Modo) => {
    const shuffled = shuffle(PREGUNTAS).map(q => ({ ...q, opciones: shuffle(q.opciones) }));
    setPreguntas(shuffled);
    setModo(m);
    setIndice(0);
    setPuntaje(0);
    setHistorial([]);
    setRespondido(false);
    setSeleccionada(null);
    setRespuestaEscrita("");
    setMostrarRespuesta(false);
    setTiempoRestante(m === "multiple" ? 30 : 120);
    setPantalla("juego");
  };

  const seleccionarOpcion = (opcion: string) => {
    if (respondido) return;
    limpiarTimer();
    setSeleccionada(opcion);
    setRespondido(true);
    setMostrarRespuesta(true);
    const correcto = opcion === preguntaActual.respuesta;
    if (correcto) setPuntaje(p => p + 1);
    setHistorial(h => [...h, correcto ? "correcto" : "incorrecto"]);
  };

  const evaluarEscrito = (r: "correcto" | "incorrecto") => {
    limpiarTimer();
    setRespondido(true);
    if (r === "correcto") setPuntaje(p => p + 1);
    setHistorial(h => [...h, r]);
  };

  const siguiente = () => {
    if (esUltima) { setPantalla("resultados"); return; }
    const next = indice + 1;
    setIndice(next);
    setRespondido(false);
    setSeleccionada(null);
    setRespuestaEscrita("");
    setMostrarRespuesta(false);
    setTiempoRestante(tiempoTotal);
  };

  if (pantalla === "inicio") return <PantallaInicio onIniciar={iniciarJuego} />;
  if (pantalla === "resultados") return (
    <PantallaResultados
      puntaje={puntaje} total={PREGUNTAS.length}
      historial={historial} modo={modo}
      onReiniciar={() => setPantalla("inicio")}
    />
  );
  if (!preguntaActual) return null;

  const opcionesRespuesta = preguntaActual.opciones;

  return (
    <div className="min-h-screen w-full flex flex-col" style={{ background: "linear-gradient(135deg,#04081A 0%,#061220 60%,#04081A 100%)" }}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden style={{ backgroundSize: "50px 50px", backgroundImage: "linear-gradient(to right,rgba(16,185,129,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(16,185,129,0.04) 1px,transparent 1px)" }} />

      <div className="relative z-10 flex flex-col flex-1 max-w-2xl mx-auto w-full px-4 py-6">

        {/* ── Top bar ── */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => { limpiarTimer(); setPantalla("inicio"); }}
              className="text-white/30 hover:text-white/60 transition-colors text-xs font-semibold"
            >
              ✕ Salir
            </button>
            <span className="text-white/20 text-xs">|</span>
            <span className="text-white/40 text-xs">{indice + 1} / {preguntas.length}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", color: "#10B981" }}>
              <Heart className="w-3 h-3" />
              {puntaje} correctas
            </div>
            <TimerCircle tiempo={tiempoRestante} total={tiempoTotal} color={colorTimer} />
          </div>
        </div>

        {/* ── Progress bar ── */}
        <div className="h-1.5 rounded-full mb-8 overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${((indice + 1) / preguntas.length) * 100}%`, background: "linear-gradient(90deg,#059669,#10B981)" }}
          />
        </div>

        {/* ── Question card ── */}
        <div className="rounded-2xl p-6 mb-6 flex-shrink-0" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded-full" style={{ background: "rgba(16,185,129,0.12)", color: "rgba(52,211,153,0.7)" }}>
              {preguntaActual.categoria}
            </span>
            <span className="text-white/25 text-xs">#{preguntaActual.id}</span>
          </div>
          <h2 className="text-white font-bold text-lg md:text-xl leading-snug">
            {preguntaActual.pregunta}
          </h2>
        </div>

        {/* ── Timer warning when time is low ── */}
        {tiempoRestante <= 10 && !respondido && (
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl mb-4 text-xs font-semibold" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", color: "#FCA5A5" }}>
            <AlertCircle className="w-3.5 h-3.5" />
            ¡Queda poco tiempo!
          </div>
        )}

        {/* ── Time's up message ── */}
        {respondido && tiempoRestante === 0 && (
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl mb-4 text-xs font-semibold" style={{ background: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.25)", color: "#FDE68A" }}>
            <Clock className="w-3.5 h-3.5" />
            ¡Tiempo agotado! Aquí está la respuesta correcta.
          </div>
        )}

        {/* ── MODO OPCIÓN MÚLTIPLE ── */}
        {modo === "multiple" && (
          <div className="flex flex-col gap-3">
            {opcionesRespuesta.map((opcion) => {
              const esCorrecta = opcion === preguntaActual.respuesta;
              const esSeleccionada = opcion === seleccionada;

              let estilo: React.CSSProperties = {
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              };
              let icono = null;

              if (respondido) {
                if (esCorrecta) {
                  estilo = { background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.4)" };
                  icono = <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#10B981" }} />;
                } else if (esSeleccionada && !esCorrecta) {
                  estilo = { background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.35)" };
                  icono = <XCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#EF4444" }} />;
                } else {
                  estilo = { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" };
                }
              }

              return (
                <button
                  key={opcion}
                  onClick={() => seleccionarOpcion(opcion)}
                  disabled={respondido}
                  className="w-full rounded-xl px-4 py-3.5 text-left flex items-center justify-between gap-3 transition-all"
                  style={{
                    ...estilo,
                    cursor: respondido ? "default" : "pointer",
                    transform: !respondido ? undefined : undefined,
                  }}
                  onMouseEnter={e => { if (!respondido) (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.35)"; }}
                  onMouseLeave={e => { if (!respondido) (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                >
                  <span className={`text-sm leading-snug ${respondido && esCorrecta ? "text-white font-semibold" : respondido && !esCorrecta && !esSeleccionada ? "text-white/35" : "text-white/80"}`}>
                    {opcion}
                  </span>
                  {icono}
                </button>
              );
            })}
          </div>
        )}

        {/* ── MODO ESCRITO ── */}
        {modo === "escrito" && (
          <div className="flex flex-col gap-4">
            {!mostrarRespuesta ? (
              <>
                <textarea
                  value={respuestaEscrita}
                  onChange={e => setRespuestaEscrita(e.target.value)}
                  placeholder="Escribe tu respuesta aquí..."
                  rows={4}
                  className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none resize-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                  onFocus={e => (e.target.style.borderColor = "rgba(16,185,129,0.4)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />
                <button
                  onClick={() => { limpiarTimer(); setMostrarRespuesta(true); setRespondido(true); }}
                  disabled={!respuestaEscrita.trim()}
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all disabled:opacity-40"
                  style={{ background: "linear-gradient(90deg,#059669,#10B981)" }}
                >
                  Ver Respuesta Correcta
                </button>
              </>
            ) : (
              <>
                {/* Respuesta del estudiante */}
                {respuestaEscrita && (
                  <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="text-white/40 text-xs font-semibold mb-1 uppercase tracking-widest">Tu respuesta</p>
                    <p className="text-white/70 text-sm leading-relaxed">{respuestaEscrita}</p>
                  </div>
                )}

                {/* Respuesta correcta */}
                <div className="rounded-xl p-4" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.3)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4" style={{ color: "#10B981" }} />
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#10B981" }}>Respuesta Correcta</p>
                  </div>
                  <p className="text-white font-semibold text-sm leading-relaxed">{preguntaActual.respuesta}</p>
                </div>

                {/* Autoevaluación */}
                {!respondido && (
                  <div className="flex flex-col gap-2">
                    <p className="text-white/50 text-xs text-center font-semibold">¿Tenías la respuesta correcta?</p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => evaluarEscrito("correcto")}
                        className="flex-1 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90"
                        style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.35)", color: "#10B981" }}
                      >
                        <CheckCircle className="w-4 h-4" />
                        Sí, la sabía
                      </button>
                      <button
                        onClick={() => evaluarEscrito("incorrecto")}
                        className="flex-1 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90"
                        style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#EF4444" }}
                      >
                        <XCircle className="w-4 h-4" />
                        No la sabía
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* ── Next button ── */}
        {respondido && (
          <div className="mt-6">
            <button
              onClick={siguiente}
              className="w-full py-4 rounded-2xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90"
              style={{ background: "linear-gradient(90deg,#059669,#10B981)" }}
            >
              {esUltima ? (
                <><Trophy className="w-4 h-4" /> Ver Resultados</>
              ) : (
                <>Siguiente Pregunta <ChevronRight className="w-4 h-4" /></>
              )}
            </button>
          </div>
        )}

        {/* ── Footer ── */}
        <p className="text-white/15 text-xs text-center mt-8">
          Enfermería · Guía Examen Final · Maestra Isabel Martínez Raeyna
        </p>
      </div>
    </div>
  );
}
