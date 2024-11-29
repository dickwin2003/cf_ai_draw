import HTML from './index.html';

export default {
    async fetch(request, env) {
        try {
            const originalHost = request.headers.get("host");

            // 设置CORS头部
            const corsHeaders = {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            };

            // 预检请求处理
            if (request.method === 'OPTIONS') {
                return new Response(null, {
                    status: 204,
                    headers: corsHeaders
                });
            }

            // 处理主要请求
            if (request.method === 'POST') {
                try {
                    const data = await request.json();
                    console.log('Received data:', data);  // 添加日志

                    if (!data.prompt || !data.model) {
                        return new Response('Missing prompt or model', { 
                            status: 400, 
                            headers: corsHeaders 
                        });
                    }

                    let model = '@cf/lykon/dreamshaper-8-lcm';

                    // 模型选择逻辑
                    switch (data.model) {
                        case 'dreamshaper-8-lcm':
                            model = '@cf/lykon/dreamshaper-8-lcm';
                            break;
                        case 'stable-diffusion-xl-base-1.0':
                            model = '@cf/stabilityai/stable-diffusion-xl-base-1.0';
                            break;
                        case 'stable-diffusion-xl-lightning':
                            model = '@cf/bytedance/stable-diffusion-xl-lightning';
                            break;
                        default:
                            return new Response('Invalid model selection', { 
                                status: 400, 
                                headers: corsHeaders 
                            });
                    }

                    console.log('Using model:', model);  // 添加日志

                    // 准备 AI 模型输入
                    const inputs = {
                        prompt: data.prompt,
                    };

                    // 调用 AI 模型并返回结果
                    const response = await env.AI.run(model, inputs);
                    
                    if (!response) {
                        throw new Error('No response from AI model');
                    }

                    return new Response(response, {
                        headers: {
                            ...corsHeaders,
                            'content-type': 'image/png;base64',
                        },
                    });
                } catch (error) {
                    console.error('Error processing request:', error);  // 添加错误日志
                    return new Response('Error processing image generation: ' + error.message, { 
                        status: 500, 
                        headers: corsHeaders 
                    });
                }
            } else {
                // 处理 GET 请求，返回 HTML 页面
                return new Response(HTML.replace(/{{host}}/g, originalHost), {
                    status: 200,
                    headers: {
                        ...corsHeaders,
                        "content-type": "text/html"
                    }
                });
            }
        } catch (error) {
            console.error('Global error:', error);  // 添加全局错误日志
            return new Response('Internal Server Error: ' + error.message, { 
                status: 500,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'text/plain'
                }
            });
        }
    }
};
