interface RendererContext {
    
};

interface Renderer {
    Context: RendererContext,
    
    Begin(): void,
    End(): void
}