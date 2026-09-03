import React, { useState } from "react";
import { Calculator, Package, AlertCircle, TrendingUp } from "lucide-react";

export default function CalculadoraCemento() {
  const [largo, setLargo] = useState(10);
  const [ancho, setAncho] = useState(5);
  const [espesor, setEspesor] = useState(0.07);
  const [factor, setFactor] = useState(7.5);

  const volumen = largo * ancho * espesor;
  const bolsasBase = volumen * factor;
  const bolsasConExtra = bolsasBase * 1.1;
  const bolsasRedondeadas = Math.ceil(bolsasConExtra);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="flex items-center gap-4 mb-4">
            <Package className="w-12 h-12 text-white" />
            <h1 className="text-4xl font-bold text-white">
              Calculadora de Cemento para Contrapisos
            </h1>
          </div>
          <p className="text-amber-100 text-lg">
            La fórmula clásica de obra:{" "}
            <span className="font-bold text-white">
              Largo × Ancho × Espesor × 7.5
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Panel de Entrada */}
          <div className="bg-white rounded-xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Calculator className="w-6 h-6 text-orange-600" />
              Datos de la Obra
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Largo (metros)
                </label>
                <input
                  type="number"
                  value={largo}
                  onChange={(e) => setLargo(Number(e.target.value))}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none text-lg"
                  step="0.1"
                  min="0"
                />
                <div className="mt-2 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-400 to-amber-400 transition-all duration-300"
                    style={{ width: `${Math.min(largo * 5, 100)}%` }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ancho (metros)
                </label>
                <input
                  type="number"
                  value={ancho}
                  onChange={(e) => setAncho(Number(e.target.value))}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none text-lg"
                  step="0.1"
                  min="0"
                />
                <div className="mt-2 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-400 to-amber-400 transition-all duration-300"
                    style={{ width: `${Math.min(ancho * 10, 100)}%` }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Espesor (metros)
                </label>
                <input
                  type="number"
                  value={espesor}
                  onChange={(e) => setEspesor(Number(e.target.value))}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none text-lg"
                  step="0.01"
                  min="0"
                />
                <div className="mt-2 text-sm text-gray-600">
                  Típico: 0.05m (5cm) a 0.10m (10cm)
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Factor (bolsas por m³)
                </label>
                <div className="flex gap-2 mb-2">
                  <button
                    onClick={() => setFactor(6.5)}
                    className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-all ${
                      factor === 6.5
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    6.5
                    <div className="text-xs">Económica</div>
                  </button>
                  <button
                    onClick={() => setFactor(7)}
                    className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-all ${
                      factor === 7
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    7<div className="text-xs">Normal</div>
                  </button>
                  <button
                    onClick={() => setFactor(7.5)}
                    className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-all ${
                      factor === 7.5
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    7.5
                    <div className="text-xs">Resistente</div>
                  </button>
                </div>
                <div className="text-sm text-gray-600">
                  <strong>7.5</strong> → Mezcla 1:4:4 con 350-380 kg/m³
                </div>
              </div>
            </div>
          </div>

          {/* Panel de Resultados */}
          <div className="space-y-6">
            {/* Resultado Principal */}
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl shadow-2xl p-8 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">Resultado Final</h3>
                <Package className="w-10 h-10" />
              </div>
              <div className="text-6xl font-black mb-2">
                {bolsasRedondeadas}
              </div>
              <div className="text-2xl font-semibold opacity-90">
                bolsas de cemento
              </div>
              <div className="mt-4 text-sm opacity-75">(de 50 kg c/u)</div>
            </div>

            {/* Desglose del Cálculo */}
            <div className="bg-white rounded-xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-600" />
                Desglose del Cálculo
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">
                    Volumen (m³)
                  </span>
                  <span className="text-xl font-bold text-gray-900">
                    {volumen.toFixed(3)} m³
                  </span>
                </div>

                <div className="text-center text-gray-500 text-2xl">×</div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Factor</span>
                  <span className="text-xl font-bold text-gray-900">
                    {factor} bolsas/m³
                  </span>
                </div>

                <div className="text-center text-gray-500 text-2xl">=</div>

                <div className="flex justify-between items-center p-3 bg-orange-100 rounded-lg border-2 border-orange-300">
                  <span className="text-orange-800 font-medium">
                    Bolsas base
                  </span>
                  <span className="text-xl font-bold text-orange-900">
                    {bolsasBase.toFixed(1)} bolsas
                  </span>
                </div>

                <div className="text-center text-gray-500 text-2xl">+ 10%</div>

                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg">
                  <span className="text-white font-bold">Bolsas a comprar</span>
                  <span className="text-2xl font-black text-white">
                    {bolsasRedondeadas} bolsas
                  </span>
                </div>
              </div>
            </div>

            {/* Tips del Maestro */}
            <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-amber-900 mb-2 text-lg">
                    Tips del Maestro
                  </h4>
                  <ul className="space-y-2 text-amber-800">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>
                        Siempre sumá un <strong>10% extra</strong> por pérdidas
                        y compactación
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>
                        Mezclá bien <strong>en seco</strong> primero antes de
                        agregar agua
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>
                        No te pases con el agua o queda sopa y pierde fuerza
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>
                        Factor <strong>7.5</strong> es el más usado: sale
                        resistente y no te pasás de guita
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explicación de la Fórmula */}
        <div className="mt-8 bg-white rounded-xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            ¿Por qué funciona esta fórmula?
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-3">1.</div>
              <h4 className="font-bold text-gray-800 mb-2">
                Calculás el volumen
              </h4>
              <p className="text-gray-700">
                Largo × Ancho × Espesor = metros cúbicos (m³) de contrapiso que
                vas a hacer
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
              <div className="text-4xl font-bold text-orange-600 mb-3">2.</div>
              <h4 className="font-bold text-gray-800 mb-2">El factor 7.5</h4>
              <p className="text-gray-700">
                Viene de que una mezcla estándar (1:4:4) usa ~350-380 kg de
                cemento por m³, o sea ~7.5 bolsas de 50kg
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-3">3.</div>
              <h4 className="font-bold text-gray-800 mb-2">+10% de colchón</h4>
              <p className="text-gray-700">
                Siempre se pierde material en compactación, derrames y porque en
                la obra nada sale perfecto
              </p>
            </div>
          </div>
        </div>

        {/* Tabla de Referencia */}
        <div className="mt-8 bg-white rounded-xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Tabla de Referencia Rápida
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                  <th className="px-4 py-3 text-left font-bold">Factor</th>
                  <th className="px-4 py-3 text-left font-bold">
                    Tipo de Mezcla
                  </th>
                  <th className="px-4 py-3 text-left font-bold">kg/m³</th>
                  <th className="px-4 py-3 text-left font-bold">Uso</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold text-orange-600">6.5</td>
                  <td className="px-4 py-3">1:5:5 (económica)</td>
                  <td className="px-4 py-3">~325 kg/m³</td>
                  <td className="px-4 py-3">
                    Contrapisos livianos, poco tránsito
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold text-orange-600">7.0</td>
                  <td className="px-4 py-3">1:4:5 (normal)</td>
                  <td className="px-4 py-3">~350 kg/m³</td>
                  <td className="px-4 py-3">Uso residencial estándar</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 bg-orange-50">
                  <td className="px-4 py-3 font-bold text-orange-600">7.5</td>
                  <td className="px-4 py-3 font-semibold">
                    1:4:4 (resistente) ⭐
                  </td>
                  <td className="px-4 py-3">~375 kg/m³</td>
                  <td className="px-4 py-3 font-semibold">
                    El más usado - buen balance
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold text-orange-600">8.0</td>
                  <td className="px-4 py-3">1:3:4 (reforzada)</td>
                  <td className="px-4 py-3">~400 kg/m³</td>
                  <td className="px-4 py-3">Alto tránsito o cargas pesadas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
