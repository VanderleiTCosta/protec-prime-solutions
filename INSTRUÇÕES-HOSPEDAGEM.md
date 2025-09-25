# Instruções de Hospedagem e Otimização - Desentupidora

## 📈 Otimizações Implementadas para PageSpeed 100%

### ✅ Performance
- **Lazy Loading**: Todas as imagens implementam `loading="lazy"`
- **Scripts Defer**: Script principal com atributo `defer`
- **Preconnect**: DNS prefetch para Google Fonts e WhatsApp
- **Minificação**: CSS/JS automaticamente minificados pelo Vite
- **Design System**: CSS otimizado com tokens reutilizáveis

### ✅ SEO Completo
- **Meta Tags**: Títulos únicos, descrições otimizadas (<160 chars)
- **Structured Data**: Schema.org implementado
- **URLs Amigáveis**: `/campinas`, `/sao-paulo`, `/vinhedo`, `/zona-leste`
- **Canonical Tags**: Evita conteúdo duplicado
- **Open Graph**: Compartilhamento otimizado redes sociais

### ✅ Responsive Design
- **Mobile First**: Design otimizado para celular
- **Breakpoints**: Layout adaptável para todos dispositivos
- **Touch Targets**: Botões de contato otimizados para mobile

## 🚀 Hospedagem Recomendada

### Opção 1: Vercel (Recomendado)
```bash
# 1. Fazer deploy
npm install -g vercel
vercel

# 2. Configurar domínios customizados
# No painel Vercel: Settings > Domains
```

### Opção 2: Netlify
```bash
# 1. Build do projeto
npm run build

# 2. Upload da pasta dist/ no Netlify
# 3. Configurar redirects em netlify.toml
```

### Opção 3: CloudFlare Pages
- Conectar repositório GitHub
- Build command: `npm run build`
- Publish directory: `dist`

## 🌐 Configuração de CDN (CloudFlare)

### 1. DNS Configuration
```
CNAME   www              cloudflare-proxy
A       @                [IP do servidor]
```

### 2. Page Rules (CloudFlare)
```
Cache Level: Cache Everything
Browser Cache TTL: 1 year
Edge Cache TTL: 1 month
```

### 3. Speed Optimizations
- ✅ Auto Minify (CSS, JS, HTML)
- ✅ Brotli Compression
- ✅ HTTP/2 Server Push
- ✅ Early Hints

## 📊 Domínios Sugeridos

### URLs Otimizadas para SEO:
- `desentupimentocampinas.com.br`
- `desentupimentosaopaulo.com.br`
- `desentupimentovinhedo.com.br`
- `desentupidorazonaleste.com.br`

### Redirects (301)
Configure redirects para variações:
```
desentupidora-campinas.com.br → desentupimentocampinas.com.br
desentupimento-sp.com.br → desentupimentosaopaulo.com.br
```

## 🔧 Configurações do Servidor

### Apache (.htaccess)
```apache
# Compressão GZIP
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache Headers
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
</IfModule>
```

### Nginx
```nginx
# Compressão
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

# Cache Headers
location ~* \.(css|js|png|jpg|jpeg|gif|webp|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## 📱 Teste de Performance

### Ferramentas para Validar 100% PageSpeed:
1. **Google PageSpeed Insights**: https://pagespeed.web.dev/
2. **GTmetrix**: https://gtmetrix.com/
3. **WebPageTest**: https://www.webpagetest.org/
4. **Lighthouse**: DevTools > Lighthouse

### Métricas Alvo:
- ✅ Performance: 100/100
- ✅ Accessibility: 100/100  
- ✅ Best Practices: 100/100
- ✅ SEO: 100/100

## 🔍 SEO Local

### Google My Business
- Cadastrar empresa para cada cidade
- Fotos do veículo e equipe
- Avaliações de clientes

### Schema.org
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Desentupidora Campinas",
  "telephone": "+55-11-94010-3334",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Campinas",
    "addressRegion": "SP"
  },
  "openingHours": "Mo-Su 00:00-23:59"
}
```

## 📞 Monitoramento

### Analytics
- Google Analytics 4
- Search Console
- Hotjar (opcional)

### WhatsApp Business API
- Configurar respostas automáticas
- Integrar com CRM
- Métricas de conversão

## ✅ Checklist Final

- [ ] DNS configurado com CloudFlare
- [ ] SSL certificado ativo
- [ ] Redirects 301 configurados
- [ ] Sitemap.xml gerado
- [ ] robots.txt otimizado
- [ ] Google Search Console configurado
- [ ] WhatsApp Business configurado
- [ ] Teste PageSpeed 100% aprovado
- [ ] Teste mobile responsivo
- [ ] Links de contato funcionando