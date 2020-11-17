import { findByRole, fireEvent, getByRole } from "@testing-library/react";
import React from "react";

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Age } from './index';

let container: HTMLDivElement | null = null;
beforeEach(() => {
    // met en place un élément DOM comme cible de rendu
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // nettoie en sortie de test
    if (container) {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    }
});

it("affiche l'age", () => {
    act(() => {
        render(<Age />, container);
    });
    expect(container?.textContent).toBe("Veuillez entrer votre annee de naissance");
    let yearField = getByRole(container as HTMLDivElement, "year");

    /// Nombre 2000
    act(() => {
        fireEvent.change(yearField, { target: { value: "2000" } })
    })
    act(() => {
        expect(container?.textContent).toBe("Vous avez 20 ans");
    })

    /// Nombre invalide
    act(() => {
        fireEvent.change(yearField, { target: { value: "aaaa" } })
    })
    act(() => {
        expect(container?.textContent).toBe("Veuillez entrer votre annee de naissance");
    })

    /// Age plus de 100
    act(() => {
        fireEvent.change(yearField, { target: { value: "1920" } })
    })
    act(() => {
        expect(container?.textContent).toBe("Veuillez entrer une annee valide");
    })
});