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

## 开发者

如果你想要进行开发或修改，可以克隆本仓库：

```bash
git clone https://github.com/yourusername/cf-ai-draw.git
cd cf-ai-draw
```

## 许可证

MIT License
