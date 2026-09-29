# 📋 PLANIFICACIÓN Y REQUERIMIENTOS OFICIALES: ZENCASH (CAJERO 1XBET)

Este documento es la hoja de ruta oficial y el checklist de control de calidad para el desarrollo de la landing page de conversión de **ZENCASH**, cajero oficial de 1xBet.

---

## 1. Visión General del Proyecto
* **Nombre de Marca:** ZENCASH
* **Rol:** Agente / Cajero Autorizado 1xBet.
* **Objetivo de Conversión:** Maximizar el depósito inmediato de apostadores mediante transferencias bancarias locales y billeteras virtuales, con cierre directo en WhatsApp en menos de 3 pasos.
* **Público Objetivo:** Jugadores y apostadores (90%+ tráfico móvil) que buscan recargas sin trabas bancarias, atención en español y retiros asegurados.

---

## 2. Requerimientos de Diseño Visual (Estilo "nocnoc" - Anti-IA)
- [ ] **Color Blocking Sólido y Limpio:**
  - Uso estricto de contrastes de alto impacto (Azul corporativo 1xBet, blanco nítido y acentos cian/verde).
  - Cero fondos oscuros con "blur orbs" o manchas de luz desenfocadas de IA.
  - Cero cuadrículas de puntitos milimetrados de Tailwind genérico.
- [ ] **Geometría y Componentes con Identidad Propia:**
  - Componentes con personalidad (tarjetas de recarga que parecen recibos bancarios reales, bordes limpios, cabeceras estructuradas).
  - Logotipo vectorial oficial de **1xBet** y logotipo moderno de **ZENCASH**.
  - Logos reales de pasarelas de pago y bancos locales (no iconos abstractos).
- [ ] **Erradicación de Clichés de IA:**
  - ❌ Prohibido: Terminales falsas (`$ comando`).
  - ❌ Prohibido: Bordes neón giratorios (*border beam*).
  - ❌ Prohibido: Bento grids con gráficos de líneas inventadas.
  - ❌ Prohibido: Testimonios con fotos de gringos sonrientes de stock.
  - ❌ Prohibido: Botones con rayos de luz que pasan solos (*shimmer*).
  - ❌ Prohibido: Sombras radiactivas o glows neón saturados.

---

## 3. Requerimientos Técnicos y Arquitectura CSS (CERO REDUNDANCIA)
- [ ] **Design Tokens Centralizados en `:root`:**
  - Colores corporativos, de superficie, de texto y de acción.
  - Escala tipográfica atómica (`--font-size-xs` a `--font-size-4xl`).
  - Escala de espaciados (`--space-1` a `--space-16`).
  - Radios de borde (`--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-full`).
  - Sistema de sombras con física real y luz cenital suave (`--shadow-sm`, `--shadow-md`, `--shadow-lg`).
- [ ] **Prohibición de Valores "Quemados" (DRY estricto):**
  - Ningún selector usará códigos hexadecimales sueltos si existe una variable.
  - Los colores se referencian exclusivamente con `var(--color-...)`.
- [ ] **Tipografía Semántica sin Redundancia:**
  - La propiedad `font-family` se declara **una sola vez** en la base global (`html, body`).
  - Los elementos semánticos `h1`, `h2`, `h3`, `h4`, `p` tienen sus tamaños, pesos e interlineados asignados automáticamente por defecto usando los tokens.
  - Cero clases artificiales repetitivas.

---

## 4. Estructura de Secciones de la Landing Page
- [x] **1. Top Status Bar:** Indicador de cajero en línea 24/7 y tiempo promedio de respuesta (< 3 min). (`TopBar.astro`)
- [x] **2. Navbar / Header Oficial:** Logotipo de ZENCASH + Badge de Agente Autorizado 1xBet + CTA rápido a WhatsApp. (`Navbar.astro`)
- [x] **3. Hero Section de Alta Conversión:** 
  - Titular contundente centrado en resolver el bloqueo de tarjetas y la inmediatez.
  - 3 puntos de confianza visibles (Acreditación en 3 min, 0% comisiones, retiros garantizados).
  - CTA principal de WhatsApp con mensaje pre-cargado.
  - Visual con comprobante/ticket de recarga dinámico y en tiempo real. (`Hero.astro`)
- [x] **4. Barra de Bancos y Métodos de Pago Locales:** Logos vectoriales reales de bancos y billeteras (Yape, BNB, Banco Unión, BMSC, BISA, FIE, Tigo Money, Binance, QR Simple). (`PaymentMethods.astro`)
- [x] **5. Sección "¿Cómo Funciona?":** El proceso en 3 pasos ultra simples (Escribe -> Envía ID y comprobante -> Saldo listo) con guía rápida para encontrar el ID. (`HowItWorks.astro`)
- [x] **6. Calculadora / Cotizador de Recargas:** Widget interactivo en Bolivianos (Bs.) y USDT para simular recarga + bono de bienvenida del 50% en la primera recarga, con botón dinámico a WhatsApp. (`Calculator.astro`)
- [x] **7. Comparativa de Ventajas:** ZENCASH vs. Recarga tradicional con tarjeta rechazada por el banco. (`Comparison.astro`)
- [x] **8. Sección de Retiros Garantizados:** Explicación clara y confiable de cómo el usuario cobra sus ganancias con garantía de liquidez. (`Withdrawals.astro`)
- [x] **9. Prueba Social Auténtica:** Comprobantes con formato de chat real de WhatsApp y métricas verificadas. (`SocialProof.astro`)
- [x] **10. Preguntas Frecuentes (FAQ):** Acordeón interactivo para resolver objeciones (monto mínimo, tiempo, seguridad, ID de jugador). (`Faq.astro`)
- [x] **11. CTA de Cierre:** Bloque final de alto contraste para capturar al usuario antes de salir. (`CtaBanner.astro`)
- [x] **12. Sticky Mobile Bar:** Botón flotante permanente para usuarios móviles (90%+ del tráfico). (`StickyMobileBar.astro`)
- [x] **13. Footer Institucional:** Juego responsable (+18), términos de servicio de cajero y soporte. (`Footer.astro`)

---

## 5. Matriz de Control de Calidad Final (Checklist de Validación)
| Criterio | Estado | Observación |
| :--- | :---: | :--- |
| **Instalación limpia en Astro** | ✅ Completado | Proyecto estructurado con Astro 5.2 |
| **Tokens CSS en :root completos** | ✅ Completado | Archivo `tokens.css` sin redundancias ni hex sueltos |
| **Tipografía semántica heredada** | ✅ Completado | `font-family` una sola vez, `h1-h4, p` automáticos |
| **Identidad Zencash + 1xBet** | ✅ Completado | SVGs limpios, vectoriales y auténticos |
| **Estética "nocnoc" aplicada** | ✅ Completado | Color blocking sólido (azul/blanco/cian), cero artefactos IA |
| **Calculadora interactiva funcional** | ✅ Completado | Soporta Bs. y USDT, actualiza WhatsApp en vivo |
| **Adaptabilidad Móvil (Responsive)** | ✅ Completado | Sticky mobile bar, grids adaptables y mobile-first |
| **Compilación & Build sin errores** | ✅ Completado | `npm run build` completado en 1.69s con 0 errores |
| **Verificación final cruzada** | ✅ Completado | Todos los requerimientos del usuario cumplidos |
