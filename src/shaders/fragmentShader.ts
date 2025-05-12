export default `
uniform float uTime;
varying vec3 vPosition;
varying vec3 vNormal;

void main() {
    vec3 viewDir = normalize(cameraPosition - vPosition);

    // -------- base color --------
    float t = cos(uTime * 0.5) * 0.5 + 0.5;  // [0 ~ 1]
    vec3 warmColor = vec3(0.55, 1.0, 0.9);  
    vec3 coolColor = vec3(1.0, 0.5, 0.3); 
    vec3 baseColor = mix(coolColor, warmColor, t);
    
    

    // -------- dynamic lights --------
    vec3 lightPos1 = vec3(8.0 * cos(uTime * 0.6), 6.0, 8.0 * sin(uTime * 0.6));
    vec3 lightDir1 = normalize(lightPos1 - vPosition);
    float diff1 = max(dot(normalize(vNormal), lightDir1), 0.0);
    vec3 halfDir1 = normalize(lightDir1 + viewDir);
    float spec1 = pow(max(dot(normalize(vNormal), halfDir1), 0.0), 48.0);

    vec3 lightPos2 = vec3(0.0, 10.0 * sin(uTime * 0.3), 10.0 * cos(uTime * 0.3));
    vec3 lightDir2 = normalize(lightPos2 - vPosition);
    float diff2 = max(dot(normalize(vNormal), lightDir2), 0.0);
    vec3 halfDir2 = normalize(lightDir2 + viewDir);
    float spec2 = pow(max(dot(normalize(vNormal), halfDir2), 0.0), 64.0);

    // -------- light & ambient color --------
    vec3 lightColor1 = vec3(1.0, 0.85, 0.7);
    vec3 lightColor2 = vec3(0.6, 0.8, 1.0);
    vec3 ambientColor = vec3(1.0, 0.9, 0.7); //warm base color
    float ambientStrength = 0.2;

    vec3 ambient = baseColor * ambientStrength;
    vec3 diffuse = baseColor * (diff1 * lightColor1 + diff2 * lightColor2);

    // -------- specular with baseColor --------
    vec3 specular1 = baseColor * lightColor1 * spec1 * 0.1;
    vec3 specular2 = baseColor * lightColor2 * spec2 * 0.05;

    // -------- rim light  --------
    float rim = 1.0 - dot(normalize(vNormal), viewDir);
    rim = pow(rim, 2.0);
    vec3 rimColor = vec3(1.0, 0.9, 0.8) * rim * 0.05;

    // -------- combine --------
    vec3 finalColor = ambient
                    + diffuse
                    + specular1
                    + specular2
                    + rimColor;

    // -------- output with gamma correction --------
    finalColor = pow(finalColor, vec3(1.0 / 2.2)); // gamma
    gl_FragColor = vec4(clamp(finalColor, 0.0, 1.0), 1.0);
}
`;