'use client';

import { useEffect, useState } from 'react';
import SocialLinks from './components/links/socialLinks';
import { FaShareAlt } from 'react-icons/fa';

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const today = new Date();
    const cutoff = new Date('2025-09-07');
    setShowForm(today >= cutoff);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Inglês do Zero às Nações',
          text: 'Conheça este projeto gratuito de inglês com propósito. Compartilhe com alguém especial!',
          url: window.location.href,
        });
      } catch (error) {
        console.error('Erro ao compartilhar:', error);
      }
    } else {
      alert('Compartilhamento não suportado neste dispositivo.');
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 gap-10 bg-black text-center">
      <h1 className="text-3xl font-bold tracking-wide text-white">
        Inglês do Zero às Nações — Segunda Edição
      </h1>
      <p className="text-lg text-green-400 font-semibold">
        Participe da lista de espera do projeto gratuito
      </p>
      <p className="text-gray-300 max-w-xl text-sm sm:text-base">
        Uma jornada de prática diária com foco em fala, escuta, leitura e escrita.
      </p>

      <div className="w-full max-w-md bg-neutral-200 p-6 rounded-xl shadow-lg">
        {showForm ? (
          <>
            <p className="text-lg font-semibold">Inscrições encerradas</p>
            <p className="text-sm text-gray-600 mt-2 mb-4">
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
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Enviar
              </button>
            </form>
          </>
        ) : (
          <>
            <p className="text-lg font-semibold text-gray-600">Lista de espera da segunda edição!</p>
            <a
              href="https://chat.whatsapp.com/GowfnBwh8b45wNWWE1eZ93?mode=ac_c"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition shadow"
            >
              Quero entrar na lista de espera
            </a>
            <p className="text-sm text-gray-500 mt-2">Grupo disponível até: 07 de setembro de 2025</p>
          </>
        )}
      </div>

      <div className="mt-6">
        <p className="text-sm mb-2 text-white">
          Isso pode mudar o futuro de alguém. Compartilhe!
        </p>
        <button
          onClick={handleShare}
          className="px-5 py-5 rounded-xl shadow-md bg-neutral-800 hover:bg-neutral-700 text-white hover:scale-105 transition-transform"
        >
          <FaShareAlt />
        </button>
      </div>

      <div className="mt-10 text-white">
        <p className="text-sm font-semibold mb-2">Me siga nas redes sociais</p>
        <SocialLinks />
      </div>

      <p className="text-xs text-gray-500 mt-8">
        Uma iniciativa Gabriel Bino © {new Date().getFullYear()}
      </p>
    </main>
  );
}
