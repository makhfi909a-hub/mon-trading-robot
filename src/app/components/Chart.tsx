"use client";
import { useEffect, useRef } from 'react';
import { createChart, ColorType } from 'lightweight-charts';
export default function TradingChart() {
      const chartContainerRef = useRef<HTMLDivElement>(null);
      useEffect(() => {
                if (!chartContainerRef.current) return;
                const chart = createChart(chartContainerRef.current, {
                              layout: { background: { type: ColorType.Solid, color: '#000' }, textColor: '#71717a' },
                              width: chartContainerRef.current.clientWidth, height: 500,
                });
                const candlestickSeries = chart.addCandlestickSeries({ upColor: '#22c55e', downColor: '#ef4444' });
                candlestickSeries.setData([{ time: '2024-01-01', open: 2030, high: 2045, low: 2028, close: 2040 }]);
                return () => chart.remove();
      }, []);
      return <div ref={chartContainerRef} className="w-full h-[500px]" />;
}
