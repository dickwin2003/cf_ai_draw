# AI Drawing Application

这是一个基于 Cloudflare Workers AI 的在线AI绘画应用。用户可以通过输入文本描述来生成AI艺术作品。

## 功能特点

- 支持多种AI模型选择：
  - DreamShaper 8 LCM (速度快，但可能出现黑图)
  - Stable Diffusion XL Base 1.0 (效果好，速度较慢)
  - Stable Diffusion XL Lightning (效果一般，速度较快)
- 支持自定义文本提示词
- 提供随机提示词功能
- 实时图像生成预览
- 响应式设计，支持移动端访问
- 优雅的用户界面，包含磨砂玻璃效果

## 技术栈

- Frontend: HTML, CSS, JavaScript
- Backend: Cloudflare Workers
- AI Models: Cloudflare Workers AI

## 使用方法

1. 从下拉菜单中选择想要使用的AI模型
2. 在文本框中输入描述词，或点击"随机提示词"按钮获取灵感
3. 点击"提交"按钮开始生成图像
4. 等待几秒钟，生成的图像将显示在页面上

## 注意事项

- 图像生成时间因选择的模型不同而异
- 设置了30秒的超时限制
- 建议使用详细的描述词以获得更好的生成效果
- 如果出现黑图，可以尝试切换其他模型或修改描述词

## 部署

本项目需要部署在 Cloudflare Workers 平台上。确保你有以下准备：

1. Cloudflare 账户
2. 配置好的 Workers 环境
3. Workers AI 访问权限

## 开发和部署

### 前置条件

1. 安装 Node.js (推荐 v16 或更高版本)
2. 安装 npm 或 yarn
3. 注册 Cloudflare 账号并获取 API token

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn
```

### 开发命令

```bash
# 本地开发
npm run dev
# 或
yarn dev

# 部署到开发环境
npm run deploy
# 或
yarn deploy

# 部署到生产环境
npm run deploy:production
# 或
yarn deploy:production
```

### 配置说明

1. 首次使用需要配置 Cloudflare 账号：
```bash
npx wrangler login
```

2. 修改 `wrangler.toml` 中的配置：
- `name`: 项目名称
- `compatibility_date`: 兼容性日期
- 环境配置 (dev/production)

## 开发者

如果你想要进行开发或修改，可以克隆本仓库：

```bash
git clone https://github.com/yourusername/cf-ai-draw.git
cd cf-ai-draw
```

## 许可证

MIT License
