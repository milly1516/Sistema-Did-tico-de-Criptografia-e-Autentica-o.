def inverter_senha(senha):
    return "".join(str(9 - int(d)) for d in senha if d.isdigit())

def mapear_ascii(nome):
    return [(letra, ord(letra)) for letra in nome]

def codifica(texto, chave=3):
    resultado = ""
    for char in texto:
        if 'a' <= char <= 'z':
            resultado += chr((ord(char) - ord('a') + chave) % 26 + ord('a'))
        elif 'A' <= char <= 'Z':
            resultado += chr((ord(char) - ord('A') + chave) % 26 + ord('A'))
        elif '0' <= char <= '9':
            resultado += chr((ord(char) - ord('0') + chave) % 10 + ord('0'))
        else:
            resultado += char
    return resultado

def calcula_hash(palavra):
    return sum(ord(c) for c in palavra)


# Execução e Testes no Terminal
if __name__ == "__main__":
    print("--- 1. Inversão Digital ---")
    print("Senha '4567':", inverter_senha("4567"))

    print("\n--- 2. Mapeamento ASCII ---")
    for letra, valor in mapear_ascii("bruno"):
        print(f"Letra: {letra} | ASCII: {valor}")

    print("\n--- 3. Codificação ---")
    print("Texto 'Bruno 123!':", codifica("Bruno 123!"))

    print("\n--- 4. Teste de Colisão de Hash ---")
    p1, p2 = "roma", "amor"
    print(f"Hash '{p1}': {calcula_hash(p1)}")
    print(f"Hash '{p2}': {calcula_hash(p2)}")