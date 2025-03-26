varying vec3 vPosition;
varying vec3 vNormal;

void main() {
    vec3 lightPos = vec3(0.0, 4.0, -8.0);
    vec3 lightDir = normalize(lightPos - vPosition);

    vec3 viewDir = normalize(cameraPosition - vPosition);

    // Diffuse shading
    float diff = max(dot(normalize(vNormal), lightDir), 0.0);

    // Specular shading
    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(normalize(vNormal), halfDir), 0.0), 32.0);

    // 颜色
    vec3 baseColor = vec3(0.3, 0.6, 0.9);  // 蓝色
    vec3 lightColor = vec3(1.0, 0.8, 0.5); // 暖光

    vec3 ambient = vec3(0.2, 0.2, 0.2); // 环境光强度

    vec3 finalColor = baseColor * (diff + ambient) + lightColor * spec;
    gl_FragColor = vec4(finalColor, 1);
}