'use client';
import { useState, useEffect } from 'react';
import SocialLinks from './components/links/socialLinks';

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const today = new Date();
    const cutoff = new Date('2025-04-13');
    setShowForm(today >= cutoff);
  }, []);

  const whatsappLink = 'https://chat.whatsapp.com/Fd8lt5l6huoGsxOEFjQLW9';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 gap-10 text-center">
      <h1 className="text-3xl font-bold">Inglês do Zero às Nações</h1>
      <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-200">Projeto Gratuito</p>
      <p className="text-neutral-900 dark:text-neutral-200 max-w-xl">
        Prática de fala, leitura, escrita e gramática com uma abordagem acessível e diária.
      </p>

      <div className="w-full max-w-md bg-neutral-200 p-6 rounded-xl">
        {showForm ? (
          <>
            <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">As inscrições estão encerradas.</p>
            <p className="text-sm text-neutral-900 dark:text-neutral-200 mt-2 mb-4">
              Entre na lista de espera para a próxima edição:
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Enviar
              </button>
            </form>
          </>
        ) : (
          <>
            <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-800">Participe da primeira edição!</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 shadow-md shadow-green-600/50"
            >
              Entrar no grupo do WhatsApp
            </a>
            <p className="text-sm font-semi-bold text-neutral-500 mt-2">Disponível até: 13 de abril de 2025</p>
          </>
        )}
      </div>

      <footer className="text-sm text-nuetral-700 space-y-2">
        <p className="font-semibold">Me siga nas redes sociais</p>
        <SocialLinks />
      </footer>
    </div>
  );
}
